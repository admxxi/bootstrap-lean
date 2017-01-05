
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');




// Styles for Development (Watch-Process)


gulp.task('sass-prod', function() {
  gulp.src('scss/app.scss')
      .pipe(sass({
            outputStyle: 'compressed',
        }))
      .pipe(rename('screen-min.css'))
      .pipe(gulp.dest('assets/css'));
});

gulp.task('sass-dev', function() {
  gulp.src('scss/app.scss')
      .pipe(sass({
            sourceComments: true,
            outputStyle: 'expanded',
            errLogToConsole: true
        }))
      .pipe(rename('screen.css'))
      .pipe(gulp.dest('assets/css'));
});

gulp.task('watch' , function() {
    gulp.watch('scss/**/*.scss',['sass-dev', 'sass-prod']);
})

// Default task
gulp.task('default', function () {

    gulp.start('sass-dev');
    gulp.start('sass-prod');
    gulp.start('watch');
});
