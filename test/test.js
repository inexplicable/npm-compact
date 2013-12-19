'use strict';

var should = require('should'),
	clone = require('clone'),
	_ = require('underscore'),
	transform = require('../lib/utils').transform;

describe('main', function(){

	describe('#compact', function(){

		var compact = require('../index').compact;

		it('should gets non-null even for empty json', function(done){

			compact.should.be.ok;
			compact({}).should.be.ok;

			done();
		});

		it('should not cause any change if there are no common dependencies', function(done){

			var origin = require('./no-dup.json'),
				become = compact(clone(origin));

			become.should.be.ok;
			_.isEqual(origin, become).should.equal(true);

			done();
		});

		it('should merge common dependencies when there are no conflicts', function(done){

			var origin = require('./simple.json'),
				become = compact(clone(origin));

			become.should.be.ok;

			_.isEqual(origin, become).should.equal(false);

			collect(origin, 'raptor').length.should.equal(1);
			collect(origin, 'sax', '0.4.3').length.should.equal(1);
			collect(origin, 'mime', '1.2.11').length.should.equal(2);
			collect(origin, 'uglify-js', '1.3.5').length.should.equal(2);

			collect(become, 'raptor').length.should.equal(1);
			collect(become, 'sax', '0.4.3').length.should.equal(1);
			collect(become, 'mime', '1.2.11').length.should.equal(1);
			collect(become, 'uglify-js', '1.3.5').length.should.equal(1);

			done();
		});

		it('should merge common dependencies but stop when version collision is met', function(done){

			var origin = require('./collision.json'),
				become = compact(clone(origin));

			become.should.be.ok;

			_.isEqual(origin, become).should.equal(false);

			collect(origin, 'raptor').length.should.equal(1);
			collect(origin, 'sax', '0.4.3').length.should.equal(1);
			collect(origin, 'mime', '1.2.11').length.should.equal(2);
			collect(origin, 'uglify-js', '1.3.5').length.should.equal(2);
			collect(origin, 'uglify-js', '1.3.6').length.should.equal(1);

			collect(become, 'raptor').length.should.equal(1);
			collect(become, 'sax', '0.4.3').length.should.equal(1);
			collect(become, 'mime', '1.2.11').length.should.equal(1);
			//the common ancestor has 1.3.6 collision, shouldn't continue the convergence.
			collect(become, 'uglify-js', '1.3.5').length.should.equal(2);
			collect(become, 'uglify-js', '1.3.6').length.should.equal(1);

			done();
		});

		it('should merge common dependencies given loosen accuracy', function(done){

			var origin = require('./accuracy.json'), //accuracy is the same as collision.json, but we'll give differnt accuracy function here
				become = compact(clone(origin), function(versionExpected, actualVersion){
					
					if(versionExpected === actualVersion){
						return true;
					}

					var expected = versionExpected.split('\.'),
						actual = actualVersion.split('\.');

					return expected[0] === actual[0] && expected[1] === actual[1];
				});

			become.should.be.ok;

			_.isEqual(origin, become).should.equal(false);

			collect(origin, 'raptor').length.should.equal(1);
			collect(origin, 'sax', '0.4.3').length.should.equal(1);
			collect(origin, 'mime', '1.2.11').length.should.equal(2);
			collect(origin, 'uglify-js', '1.3.5').length.should.equal(2);
			collect(origin, 'uglify-js', '1.3.6').length.should.equal(1);

			collect(become, 'raptor').length.should.equal(1);
			collect(become, 'sax', '0.4.3').length.should.equal(1);
			collect(become, 'mime', '1.2.11').length.should.equal(1);
			//the common ancestor has 1.3.6 only
			collect(become, 'uglify-js', '1.3.5').length.should.equal(0);
			collect(become, 'uglify-js', '1.3.6').length.should.equal(1);

			done();
		});

		it('should work for a large shrinkwrap too', function(done){

			var origin = require('./large.json'),
				become = compact(clone(origin));

			become.should.be.ok;
			console.log('%j', become);

			done();
		});
	});

	describe('#force', function(){

		var force = require('../index').force,
			origin = require('./large.json'),
			manifest = clone(origin);

		it('should load npm and work with install & shrinkwrap', function(done){

			force.should.be.ok;

			force(clone(origin), manifest, function(forced){

				forced.should.be.ok;

				done();
			});
		});
	})
});

//testing utility
function collect(shrinkwrap, name, version){

	var match = !version ? function(dep){
				return dep.name === name;
			} : function(dep){
				return dep.name === name && dep.version === version;
			},
		collectRecursively = function collectRecursively(node, match, collection){

			if(match(node)){
				collection.push(node);
			}

			_.each(node.dependencies, function(dep){
				collectRecursively(dep, match, collection);
			});
		},
		collection = [];

	collectRecursively(transform(clone(shrinkwrap), null, shrinkwrap.name, 0), match, collection);

	return collection;
}
