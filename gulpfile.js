// MODULES required to run the gulp tasks
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

// SOURCES used in all tasks
var sources = {
    sass: {
        ltr: 'sass/app.scss',
        rtl: 'sass/app.rtl.scss',
        watch: 'sass/**/**',
        outputFolder: 'css/'
    },
    html: '*.html'
};

// FUNCTIONS used in gulp tasks
var compileSass = function (src, dest) {
    gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed', errLogToConsole: true}).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(dest))
        .pipe(browserSync.stream());
};

// SASS COMPILATION
gulp.task('sass', function () {
    // ltr sass compilation
    compileSass(sources.sass.ltr, sources.sass.outputFolder);
    // rtl sass compilation
    compileSass(sources.sass.rtl, sources.sass.outputFolder);
});

// HTML live reload
gulp.task('html', function () {
    gulp.src(sources.html)
        .pipe(browserSync.stream());
});

// WATCH FILES to compile the write tasks
gulp.task('watch', function () {
    gulp.watch(sources.html, ['html']);
    gulp.watch(sources.sass.watch, ['sass']);
});

// BROSERSYNC live reload
gulp.task('serve', ['sass', 'html', 'watch'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// DEFAULT TASK
// called when typing just `gulp`
gulp.task('default', ['sass', 'watch']);