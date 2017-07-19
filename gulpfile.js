var gulp = require('gulp');
var bs = require('browser-sync');
var ts = require('gulp-typescript');
var bundler = require('aurelia-bundler');

let bundleConfig = {
    force: true,
    baseURL: '.',
    configPath: './jspm.config.js',
    bundles: {
        "dist/bundle": {
            "includes": [
                "app.js",
                "app.html!text",
                "main.js",
                "my-context-menu.html!text",
                "my-context-menu.js",
                "my-panel.html!text",
                "my-panel.js",
                "my-thing.html!text",
                "my-thing.js",

                "jquery",
                "font-awesome",

                "aurelia-framework",
                "aurelia-bootstrapper",
                "aurelia-router",
                "aurelia"
            ]
        }
    }
};

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

function unbundle() {
    return bundler.unbundle(bundleConfig);
}

function bundle() {
    return bundler.bundle(bundleConfig);
}

gulp.task('default', gulp.series(unbundle, compile, serve, watch));
gulp.task('serve', serve);
gulp.task('compile', gulp.series(unbundle, compile));
gulp.task('unbundle', unbundle);
gulp.task('bundle', gulp.series(unbundle, compile, bundle));