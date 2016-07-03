module.exports = function(grunt) {
    // Load the Grunt plugins.
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Project configuration.
    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                        rename: false,
                        width: '100%',
                        quality: 20
                    }]
                },
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'img/',
                    dest: 'imgOpt/'
                }, {
                    expand: true,
                    src: ['pizza*.{gif,png}'],
                    cwd: 'views/images',
                    dest: 'views/imagesOpt/'
                }]
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    src: ['**/*.{png,jpg,gif}'],
                    cwd: 'img/',
                    dest: 'imgOpt/'
                }, {
                    expand: true,
                    src: ['**/*.{png,jpg,gif}'],
                    cwd: 'views/images',
                    dest: 'views/imagesOpt/'
                }]
            }
        }
    });

    // Register the default tasks.
    grunt.registerTask('default', ['responsive_images', 'imagemin']);
}
