module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            files: ['GruntFile.js', 'app/**/*.js', 'tests/**/*.js', "!**/libs/*.js"],
            options: {
                curly: true,
                eqeqeq: true,
                browser: true,
                globals: {
                    require: true,
                    afterEach: true,
                    after: true,
                    beforeEach: true,
                    before: true,
                    it: true,
                    expect: true,
                    console: true
                }
            }
        },
        mocha: {
            all: {
                src: ['*.html', 'tests/**/*.html'],
                options: {
                    mocha: {
                        ignoreLeaks: false
                    },
                    run: true
                    
                }
            }
        },
         watch: {
            files: "<%= jshint.files %>",
            tasks: ["jshint", "mocha"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['jshint', 'mocha']);
};    


