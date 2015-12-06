module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['src/**/*.scss'],
                tasks: ['sass'],
                options: {
                    atBegin: true
                }
            },
            server: {
                files: [
                    'src/**/*.js',
                    'src/**/*.html',
                    'src/**/*.css'
                ],
                options: {
                    interrupt: true,
                    livereload: true
                }
            }
        },
        connect: {
            test: {
                options: {
                    port: 8001,
                    base: 'src'
                }
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public/css',
                    src: ['*.scss'],
                    dest: 'public/css',
                    ext: '.css'
                }]
            },
            options: {
                style: 'compressed'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['connect', 'watch']);
};