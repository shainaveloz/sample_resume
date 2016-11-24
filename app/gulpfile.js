var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// plugins
var concat = require('gulp-concat');

// Concatenate JS Files
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('build/js'));
});
// Default Task
gulp.task('default', ['scripts']);

// watch files for changes and reload
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});

gulp.task('sass', function() {
    return sass('scss/styles.scss')
        .pipe(gulp.dest('app/css'))
        .pipe(reload({ stream:true }));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('serve', ['sass'], function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch('app/scss/*.scss', ['sass']);
});