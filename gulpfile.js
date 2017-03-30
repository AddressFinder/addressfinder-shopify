var gulp   = require('gulp');
var fs     = require('fs');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Configuration
var eslintConfig = JSON.parse(fs.readFileSync('./.eslintrc.json'));
var srcFolder = './src';
var distFolder = './dist';
var jsFiles = srcFolder + '/*.js';
var bundleFileName = 'addressfinder.js';
var outputFileName = 'addressfinder.min.js';

gulp.task('default', ['lint'], function () {
  // place code for your default task here
});

gulp.task('build', ['lint', 'concat', 'minify'], function () {
  // place code for your default task here
  console.log('Build complete');
});

gulp.task('lint', function() {
  return gulp.src(srcFolder + '/**').pipe(eslint({
    'rules': eslintConfig.rules
  }))
  .pipe(eslint.format())
  // Brick on failure to be super strict
  .pipe(eslint.failOnError());
});

gulp.task('concat', function() {
  return gulp.src(jsFiles)
    .pipe(concat(bundleFileName))
    .pipe(gulp.dest(distFolder));
});

gulp.task('minify', function() {
  return gulp.src(distFolder + '/' + bundleFileName)
    .pipe(rename(outputFileName))
    .pipe(uglify())
    .pipe(gulp.dest(distFolder));
});
