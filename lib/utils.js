'use strict';

var _ = require('underscore');

/**
 * @param root (root of the deps tree)
 * @param parent (parent node of the current level)
 * @param name of the dependency
 * @param depth of the current level, starting from 0
 *
 * transformation traverse the deps tree, turn each 'dependencies' object structure into an array, add 'name', 'parent', 'depth' information to each dep node
 * @return a graph of dependencies
 */
exports.transform = function transform(root, parent, name, depth){

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


/**
 * @param root of the dependencies graph
 * @return root of the restored dependencies tree
 * 
 * a clean up of the traversed graph, to cut 'parent' and other redundant information added
 */
exports.clean = function clean(root){

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