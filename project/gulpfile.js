const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp.src('src/scss/**/*.scss') // Path to your SCSS files
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css')); // Output directory for CSS files
}
gulp.task('sass', compileSass);

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask