var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyJS = require('gulp-minify');


var srcPath = ['./lib/**/*.js', './src/entities/*.js', './src/boot.js',  './src/load.js',  './src/credits.js', './src/play.js',   './src/menu.js', './src/main.js'];

gulp.task('default', function() {
    return gulp.src(srcPath)
        .pipe(minifyJS())
        .pipe(concat('bundle.min.js'))
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('./build/'));
});
