'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src: ['public/nearby.bundle.js', 'public/vendor.bundle.js'],
        dest: 'production/main.js'
      }
    },
    uglify: {
      js: {
        src: 'production/main.js',
        dest: 'production/main.min.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('build', ['concat', 'uglify']);
};