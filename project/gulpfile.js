const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));  // Import sass with gulp-sass

// Path to your Sass files
const sassFiles = 'src/scss/**/*.scss';  // Adjust this path based on your project structure
const outputDir = 'dist/css';  // Directory to output the compiled CSS

// Sass task
gulp.task('sass', () => {
  return gulp.src(sassFiles)  // Grab all .scss files
    .pipe(sass().on('error', sass.logError))  // Compile Sass to CSS
    .pipe(gulp.dest(outputDir));  // Output the compiled CSS
});

// Watch task to watch for changes in Sass files
gulp.task('watch', () => {
  gulp.watch(sassFiles, gulp.series('sass'));  // Watch for changes in .scss files and run the 'sass' task
});

// Default task that runs when you just type 'gulp'
gulp.task('default', gulp.series('sass', 'watch'));