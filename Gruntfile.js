'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

		// https://github.com/basarat/grunt-ts
        ts: {

            core: {
                src: ["ts/**/*.ts"],
                out: "lib/core.js",
                reference: "ts/reference.ts",
                options: {
                    module: 'commonjs',
                    comments: true
                }
            }

        },

		// https://github.com/krampstudio/grunt-jsdoc-plugin
		jsdoc : {
			core: {
				src: ['lib/core.js'],
				options: {
					destination: 'docs/'
				}
			}
		},

        watch: {

            core: {
                files: "ts/**/*.ts",
                tasks: ["ts:core"],
                options: {
                    spawn: false
                }
            }
		},

		// https://github.com/pghalliday/grunt-mocha-test
		mochaTest: {
			core: {
				options: {
					reporter: 'spec'
				},
				src: ['test/**/*.js']
			}
		},

		release: {
			options: {
				//bump: true, 											//default: true
				//file: 'component.json', 								//default: package.json
				//add: false, 											//default: true
				//commit: false, 										//default: true
				//tag: false, 											//default: true
				//push: false, 											//default: true
				//pushTags: false, 										//default: true
				npm: false, 											//default: true
				folder: './', 											//default project root
				//tagName: 'version-<%= version %>', 					//default: '<%= version %>'
				commitMessage: 'Release <%= version %>', 				//default: 'release <%= version %>'
				tagMessage: 'Release <%= version %> via Grunt-Release', //default: 'Version <%= version %>',
				github: {
					repo: 'c2cs/node-core', 						//put your user/repo here
					usernameVar: 'GITHUB_USERNAME', 					//ENVIRONMENT VARIABLE that contains Github username
					passwordVar: 'GITHUB_PASSWORD' 						//ENVIRONMENT VARIABLE that contains Github password
				}
			}
		}

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-release');

    // Default task.
    grunt.registerTask('default', ['ts','watch']);
    grunt.registerTask('doc', ['jsdoc']);
    grunt.registerTask('test', ['mochaTest:core']);

};