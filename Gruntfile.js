module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express: {
			option: {
				port: 8080
			},
			dev: {
				options: {
					script: 'app.js'
				}
			}
		},

		sass: {
			dev: {
				files: {
					'__build/_styles/style.css': '__app/_styles/style.scss'
				},
				options: {
					style: 'expanded'
				}
			}
		},

		watch: {
			scripts: {
				files: '__app/**/*.js',
				tasks: ['requirejs:devScripts'],
				options: {
					livereload: true
				}
			},
			css: {
				files: '__app/**/*.scss',
				tasks: ['sass:dev'],
				options: {
					livereload: true
				}
			},
			files: {
				files: '__app/**/*.hbs',
				tasks: ['express:dev'],
				options: {
					livereload: true
				}
			}
		},

		requirejs: {
			devScripts: {
				options: {
					out: '__build/_scripts/appScripts.js',
					mainConfigFile: '__app/_scripts/appScriptsConfig.js',
					name: 'requireLib',
					paths: {
						requireLib: '../../_components/requirejs/require'
					},
					optimize: 'none'
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-express-server');

	grunt.registerTask('default', ['sass:dev', 'requirejs:devScripts', 'express:dev', 'watch']);
};