module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt, ['grunt-*']);

    grunt.initConfig({
        //our Grunt tasks

        requirejs: {
            compile: {
                options: {
                    baseUrl: './app',
                    mainConfigFile: '.app/main.js',
                    dir: './app/release/',
                    fileExclusionRegExp: /^\.|node_modules|Gruntfiles|.md|package.json/,
                    modules: [
                        {
                            name: 'main'
                        }
                    ]
                }
            }
        },

        jshint: {

            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'app/js/**/*.js']


        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    require: ['./app/css/sass/helper/url64.rb']
                },
                expand: true,
                cwd: './app/styles/sass/',
                src: ['*.scss'],
                dest: './app/styles/',
                ext: '.css'
            },
            dev: {
                options: {
                    style: 'expanded',
                    debugInfo: true,
                    lineNumbers: true,
                    require:['./app/css/sass/helper/url64.rb']

                },
                expand: true,
                cwd: './app/css/sass/',
                src: ['*.scss'],
                dest: './app/css/',
                ext: '.css'
            }
        }
    });
    grunt.registerTask('default', ['jshint:all','sass:dev']);
};
