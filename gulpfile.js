var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var babel = require('gulp-babel');

//full transcompile from TS then partial Babel to ES6
gulp.task('compile-ts-babel-tweak', function () {
    return gulp.src('ts/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts({
        experimentalAsyncFunctions: true,
        target: "ES6",
        typescript: require('typescript'),
        removeComments: true
    }))
    .pipe(babel({
        "compact": false,
        "whitelist" : [
            "es6.blockScoping",
            "es6.parameters",
            "es6.classes"]
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('res'));
});

//full transcompile from TS then Babel to ES5
gulp.task('compile-ts-babel', function () {
    return gulp.src('ts/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts({
        experimentalAsyncFunctions: true,
        target: "ES6",
        typescript: require('typescript'),
        removeComments: true
    }))
    .pipe(babel({
        "compact": false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('res'));
});

//pure TS task
gulp.task('compile-ts', function () {
    return gulp.src('ts/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts({
        experimentalAsyncFunctions: true,
        target: "ES6",
        typescript: require('typescript'),
        removeComments: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('res'));
});