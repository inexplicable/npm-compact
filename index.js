'use strict';

var _ = require('underscore');

/**
 * @param pkg is the json of the source module's dependencies tree representing the npm dependencies, obtained via npm ls -json or npm shrinkwrap
 * @manifest a map of dependency name & version which forces the pkg to comply with
 * @return an altered pkg json whose dependencies have been forced to comply with the manifest
 */
exports.force = function force(shrinkwrap, manifest){

	var name = shrinkwrap.name;

	return _.extend(clean(compliance(transform(shrinkwrap, null, name, 0), manifest)), {'name':name});
};

function compliance(root, manifest){

	doTraverse(root, root, function action(dep){

		var expect = manifest[dep.name];
		if(expect){
			//force to comply with the version
			_.extend(dep, {
				'version': expect.version,
				'resolved': expect.resolved
			});
		}

		_.each(dep.dependencies || [], function(d){
			doTraverse(root, dep, action);
		});
	});

	return root;
}

/**
 * @param pkg is the json of the source module's dependencies tree representing the npm dependencies, obtained via npm ls -json or npm shrinkwrap
 * @return an optimized pkg json mainly compacting duplicate node modules dependencies
 * NOTE npm install is smart enough to cache the same dependencies (name + version) for decendent dependencies to reuse because of the resolution mechanism
 * what it couldn't deduplicate is in the cases of branched dependencies, for example:
 * root dependencies: [a, b, c]
 * a's dependencies: [d]
 * b's dependencies: [d, e]
 * in fact we could pull 'b' to root, make it [a, b, c, d], and let a/b's d resolution walk up and get it (version must match).
 * and this is the major incentive of this npm-compact module, to reduce the npm download needed, and more importantly, the modules loaded into memory
 * besides, it could be a possible side-effect that compatible versions would in the end resolve to a single module dependency and therefore avoid some of
 * the globals needed where some modules require 'singleton' pattern or equivalent.
 */
exports.compact = function compact(shrinkwrap){

	//impl quick draft
	//in a brute forced manner, we'll do a breath 1st traversal of the deps tree
	//for each visiting dep node, we'll do another depth 1st traversal of the deps tree to find all duplicates
		//as long as there're duplicates, we'll place the dep node to their least common ancestor dep node, all of the prev deps nodes will be detached from their parent dep node
		//there're one more validation needed, the parent dep node where we're going to put the merged dep node should not have conflict verions, otherwise this attempt must be rejected
	var name = shrinkwrap.name;

	return _.extend(clean(converge(transform(shrinkwrap, null, name, 0))), {'name': name});
};

/**
 * @param root (root of the deps tree)
 * @param parent (parent node of the current level)
 * @param name of the dependency
 * @param depth of the current level, starting from 0
 *
 * transformation traverse the deps tree, turn each 'dependencies' object structure into an array, add 'name', 'parent', 'depth' information to each dep node
 * @return a graph of dependencies
 */
function transform(root, parent, name, depth){

	_.extend(root, {
		'name': name,
		'parent': parent,
		'depth': depth
	});

	var deps = root.dependencies;
	if(!deps){
		root.dependencies = [];
		return root;
	}

	root.dependencies = _.map(deps, function(dep, name){
		return transform(dep, root, name, depth + 1);
	});

	return root;
}

//just a wrapper of #doTraverse to return the same root;
function converge(root){

	doTraverse(root, root, function action(dep){

		var matches = match(root, dep);
		if(!matches || !matches.length){
			//no matches, go to next dep
			doTraverse(root, dep, action);
		}
		else{
			var common = lca(matches.concat([dep]), dep);
			//no common ancestor found, or conflict rejects the attempt, go to next dep
			if(!common || _.some(common.dependencies, function(d){
					
					return d.name === dep.name && d.version !== dep.version;
				})){

				doTraverse(root, dep, action);
			}
			else{
			//common ancestor derived, put the shared dependency here to reduce the downloads
				common.dependencies.push(dep);
			//remove the dependency from where it used to be
				_.each(matches.concat([dep]), function(match){
					match.parent.dependencies = _.without(match.parent.dependencies, match);
				});
			//TODO, should we go deeper?
			}
		}
	});
	
	return root;
}

/**
 * @param root of the dependencies graph
 * @param current, node being visited
 *
 * @return root of the dependencies graph as @param root
 * 
 * traverse does a breath-first traversal of the dependencies graph
 * at each node, it looks for other dependencies node sharing the same name & version @see #matches
 * when there're matches, we'll try getting the least common ancestor of them, and put the dependency there
 * the common ancestor should not have existing dependency whose version conflicts with the attempt
 * 
 */
function doTraverse(root, current, action){

	var deps = current.dependencies;

	if(!deps || _.isEmpty(deps)){
		//end of recursion
		return;
	}

	_.each(deps, action);

	return root;
}

/**
 * @param current
 * @param dep
 * @return an array of dependencies node whose name & version are the same as 'dep'
 */
function match(current, dep){
	//end of recursion
	if(!current || !current.dependencies || current === dep){

		return [];
	}
	//matches the dependency, try sharing
	else if(current.name === dep.name && current.version === dep.version){

		return [current];
	}
	else{
	//go to children dependencies to look for shared dependency
		return _.compact(_.reduce(current.dependencies, function(memoize, d){
				
				return memoize.concat(match(d, dep));

			}, []));
	}
}

/**
 * @param matches an array of common dependencies
 * @param the shared dependency
 * @return null when there couldn't be a common ancestor, or a node in the dependencies tree as the common ancestor of all @param matches
 */
function lca(matches, dep){

	//error case
	if(!matches || !matches.length){
		return null;
	}
	//end, found the ancestor
	else if(matches.length < 2){
		return matches[0]
	}
	else{
		//find the highest node in the matches
		var minDepth = _.min(_.map(matches, function(m){
			return m.depth;
		}));

		//move everyone else to the same depth
		var branches = _.map(matches, function(m){

			var delta = m.depth - minDepth;

			while(delta){

				m = m.parent;
				delta -= 1;

				if(m.name === dep.name && m.version !== dep.version){
					return null;
				}
			}

			return m;
		});
		//fail early if not all branches are non-null
		if(!_.every(branches)){
			return null;
		}
		//move every branch towards root, merge at each time, fail early each time a null is found, till they converge 
		for(branches = _.uniq(branches); minDepth && branches.length > 1; minDepth -= 1, branches = _.uniq(branches)){
			branches = _.map(branches, function(b){

				b = b.parent;
				if(b.name === dep.name && b.version !== dep.version){
					return null;
				}
				else{
					return b;
				}
			});

			if(!_.every(branches)){
				return null;
			}
		}

		return branches.length === 1 ? branches [0] : null;
	}
}

/**
 * @param root of the dependencies graph
 * @return root of the restored dependencies tree
 * 
 * a clean up of the traversed graph, to cut 'parent' and other redundant information added
 */
function clean(root){

	delete root['parent'];
	delete root['depth'];
	delete root['name'];

	if(!_.isEmpty(root.dependencies)){
	
		root.dependencies = _.reduce(root.dependencies, function(memoize, dep){

				memoize[dep.name] = clean(dep);

				return memoize;
			}, {});
	}
	else{

		delete root['dependencies'];
	}

	return root;
}
