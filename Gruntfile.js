module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['*.html'],
                tasks: ['']
            }
        },
        connect: {
            server: {
                options: {
                    port: 8083,
                    base: './',
                    debug: true
                }
            }
        },
        php: {
            dist: {
              options: {
                  port: 8083,
                  base: './',
//                  keepalive: false,
                  keepalive: true,
//                  open: true
              },
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-php");

    grunt.registerTask("default", ["connect", "watch"]);
    grunt.registerTask("serve", ["php", "watch"]);
};
