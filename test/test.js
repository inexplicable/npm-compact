'use strict';

var should = require('should');

describe('main', function(){

	describe('#compact', function(){

		var compact = require('../index').compact;

		it('should gets non-null', function(done){

			compact.should.be.ok;
			compact({}).should.be.ok;
			
			var compacted = compact(require('./ls'));
			compacted.should.be.ok;

			console.log('compacted:%j', compacted);

			done();
		});

	});

});