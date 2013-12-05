'use strict';

var _ = require('underscore');

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
exports.compact = function compact(pkg){

	//impl quick draft
	//in a brute forced manner, we'll do a depth 1st traversal of the deps tree
	//for each visiting dep node, we'll do another depth 1st traversal of the deps tree to find all duplicates
		//as long as there're duplicates, we'll place the dep node to their least common ancestor dep node, all of the prev deps nodes will be detached from their parent dep node
		//there're one more validation needed, the parent dep node where we're going to put the merged dep node should not have conflict verions, otherwise this attempt must be rejected

	var transformed = transform(pkg, null, pkg.name);

	traverse(transformed, transformed);

	return clean(transformed);
};

function transform(root, parent, name){

	_.extend(root, {
		'name': name,
		'parent': parent
	});

	var deps = root.dependencies;
	
	if(!deps){
		return root;
	}

	root.dependencies = _.map(deps, function(dep, name){
		return transform(dep, root, name);
	});

	return root;
}

function traverse(root, current){

	var deps = current.dependencies;

	if(!deps || _.isEmpty(deps)){
		//end of recursion
		return;
	}

	_.each(deps, function(dep){

		var matches = match(root, dep);
		if(!matches){
			traverse(root, dep);
		}
		else{
			var common = lca(root, matches);
			if(!validate(root, common, dep)){
				traverse(root, dep);
			}
			else{
				common.dependencies.push(dep);
				_.each(matches.concat(dep), function(match){
					match.parent.dependencies = _.without(match.parent.dependencies, match);
				});
			}
		}
	});
}

function match(root, dep){

	if(!root || !root.dependencies){

		return null;
	}
	
	return _.compact(_.reduce(root.dependencies, function(memoize, d){
			
			if(d !== dep && d.name === dep.name && d.version === dep.version){
				memoize.push(d);
			}
			return memoize;

		}, []));
}

function lca(root, matches){

	return root;
}

function validate(root, ancestor, dep){

	return true;
}

function clean(root){

	delete root['parent'];

	if(!_.isEmpty(root.dependencies)){
	
		root.dependencies = _.reduce(root.dependencies, function(memoize, dep){

				memoize[dep.name] = clean(dep);

				return memoize;
			}, {});
	}

	return root;
}