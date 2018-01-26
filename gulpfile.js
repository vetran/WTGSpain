var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCss = require('gulp-clean-css'),
    
    less = require('gulp-less'),
    notify = require("gulp-notify"),
    path = require("path"),
    watch = require('gulp-watch'),
    LessAutoprefix = require('less-plugin-autoprefix'),
    sourcemaps = require('gulp-sourcemaps'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true}),
    autoprefix = new LessAutoprefix({ browsers: ['> 1%'] });

var libs_js = [
    "src/libs/nouislider/nouislider.min.js",
    "src/libs/jquery/jquery-3.2.1.min.js",
    "src/libs/magnific/jquery.magnific-popup.min.js",
    "src/libs/slick/slick.min.js",
    "src/libs/chosen/chosen.jquery.min.js",
    "src/libs/mask/jquery.maskedinput.min.js"
];
var libs_css = [
    "src/libs/bootstrap/bootstrap.css",
    "src/libs/chosen/chosen.min.css",
    "src/libs/font-awesome/css/font-awesome.min.css",
    "src/libs/slick/slick.css",
    "src/libs/magnific/magnific-popup.css",
    "src/libs/nouislider/nouislider.min.css"
];

gulp.task('scripts', function(){
    gulp.src('src/js/main.min.js')
        .pipe(uglify({'mangle': false}))
        .pipe(gulp.dest('build/js'));
    gulp.src(libs_js)
        .pipe(concat('libs.js'))
        .pipe(uglify({'mangle': false}))
        .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function(){
    gulp.src('src/css/main.css')
        .pipe(cleanCss({level: {1: {specialComments: 0}}}))
        .pipe(gulp.dest('build/css'));
    gulp.src(libs_css)
        .pipe(concat('libs.css'))
        .pipe(cleanCss({level: {1: {specialComments: 0}}}))
        .pipe(gulp.dest('build/css'));
});


gulp.task('less', function(){
    gulp.src('src/css/main.less')
        .pipe(less({
            plugins: [ autoprefix, cleanCSSPlugin ],
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }).on('error', notify.onError({
            title: "Less",
            subtitle: "Error",
            sound: false,
            message: "<%= error.message %>"
        })))
        .pipe(notify({
            title: "Less",
            subtitle: "Compiled",
            sound: false,
            message: "<%= file.relative %>"
        }))
        .pipe(gulp.dest('src/css'));
});


gulp.task('watch', function(){
    gulp.watch('src/css/main.less', ['less']);
});
gulp.task('default', ['scripts', 'styles', 'watch']);