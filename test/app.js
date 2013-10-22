var Core = require("../"),
should = require("should");

describe('Core.app.Application', function() {

	describe('Something else', function() {

		describe('Something else', function() {

			it('should return -1 when the value is not present', function(){

				[1,2,3].indexOf(5).should.equal(-1);

				[1,2,3].indexOf(0).should.equal(-1);

			})

		})

	})

});

/*
var Core = require("node-core");
var App = Core.app.Application(

	new Core.config.FileProvider(

		"config/"

	);

);

App.run();
*/