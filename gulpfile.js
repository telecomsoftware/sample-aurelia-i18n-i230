var gulp = require('gulp');
var browserSync = require('browser-sync');
var ts = require('gulp-typescript');

function serve(done) {
    let opts = {
        online: false,
        open: false,
        port: 9100,
        ghostMode: false,
        reloadDebounce: 1000,
        server: {
            baseDir: '.'
        }
    };
    browserSync(opts, done);
}

function compile() {
    let tsProject = ts.createProject('tsconfig.json');
    return gulp.src(['./*.ts', './typings/**/*.d.ts'])
        .pipe(tsProject())
        .pipe(gulp.dest("./"));
}

gulp.task('default', gulp.series(compile, serve));
gulp.task('serve', serve);