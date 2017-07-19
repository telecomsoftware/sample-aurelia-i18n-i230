var gulp = require('gulp');
var bs = require('browser-sync');
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
    bs(opts, done);
}

function compile() {
    let tsProject = ts.createProject('tsconfig.json');
    return gulp.src(['./*.ts', './typings/**/*.d.ts'])
        .pipe(tsProject())
        .pipe(gulp.dest("./"));
}

function notifyCompile(done) {
    bs.notify("Compiling...");
    done();
}

function reload(done) {
    bs.reload();
    done();
}

function watch() {
    return gulp.watch('./*.ts', gulp.series(notifyCompile, compile, reload));
}

gulp.task('default', gulp.series(compile, serve, watch));
gulp.task('serve', serve);
gulp.task('compile', compile);