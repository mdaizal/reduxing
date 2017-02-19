var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    browserify  = require('browserify'),
    babelify    = require('babelify'),
    source      = require('vinyl-source-stream'),
    watchify    = require('watchify'),
    gUtil       = require('gulp-util'),
    gNotify     = require('gulp-notify')


//////////////////////////////////////////////////
// CONFIG
//////////////////////////////////////////////////
var config = {
    entries: './src/index.js',
    outputName: 'bundle.js',
    buildDest: './build',
    markup: './www/**',
    browserSync: {
        server: {
            baseDir: ['./build', './src', './www']            
        },
        files: ['./build/**'],
        port: 3001
    }
}


//////////////////////////////////////////////////
// BUILD TASK
//////////////////////////////////////////////////
gulp.task('build', function() {
    var bundler = browserify({
        // Required watchify args
        cache: {}, packageCache: {}, fullPaths: false,
        entries: config.entries,
        debug: true
    })

    var bundle = function() {
        return bundler
            .bundle()
            .on('error', handleError)
            .pipe(source(config.outputName))
            .pipe(gulp.dest(config.buildDest))
            .on('end', reportFinished)

    }

    bundler.transform(babelify, { presets: [ 'es2015', 'react' ]})

    if(global.isWatching) {
        bundler = watchify(bundler)
        bundler.on('update', bundle)
    }

  return bundle()
})

var reportFinished = function() {
    gUtil.log(gUtil.colors.yellow('Finished bundling'));
}

var handleError = function() {
  var args = Array.prototype.slice.call(arguments);

  gNotify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);

  this.emit('end');
}


//////////////////////////////////////////////////
// MARKUP TASK
//////////////////////////////////////////////////
gulp.task('markup', function() {
  return gulp.src(config.markup)
            .pipe(gulp.dest(config.buildDest))
});


//////////////////////////////////////////////////
// BROWSER-SYNC TASK
//////////////////////////////////////////////////
gulp.task('browserSync', ['build'], function() {
  browserSync(config.browserSync);
});


//////////////////////////////////////////////////
// WATCH TASK
//////////////////////////////////////////////////
gulp.task('setWatch', function() {
  global.isWatching = true;
});

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(config.markup,['markup']);
});


//////////////////////////////////////////////////
// DEFAULT TASK
//////////////////////////////////////////////////
gulp.task('default', ['watch']);