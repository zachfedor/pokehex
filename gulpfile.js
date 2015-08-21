var gulp = require( 'gulp' ),
    browserify = require( 'browserify' ),
    browsersync = require( 'browser-sync' ).create(),
    source = require( 'vinyl-source-stream' );
$ = require( 'gulp-load-plugins' )();

var assets = './assets';
var config = {
    sassDir: assets + '/sass',
    jsDir: assets + '/js',
    imgDir: assets + '/images',
    fontDir: assets + '/fonts',
    distDir: assets + '/dist',
    bowerDir: './bower_components'
};

gulp.task('sync', function() {
    browsersync.init({
        server: {
            baseDir: "../pokehex"
        }
    });
//    browsersync.init({
//    });
//    browsersync.init( config, function ( err, browsersync ) {
//        if( !err ) {
            //console.log("BrowserSync is ready!");
        //}
    //});
});

gulp.task('icons', function() {
    return gulp.src( config.bowerDir + '/fontawesome/fonts/**.*' )
        .pipe( gulp.dest( config.fontDir ));
});

gulp.task('browserify', function() {
    return browserify( config.jsDir + '/main.js' )
        .bundle()
        .on( 'error', function( err )
        {
            console.log( err.toString() );
            this.emit( 'end' );
        })
        .pipe( source( 'main.bundle.js' ))
        .pipe( gulp.dest( config.distDir ));
});

gulp.task('scripts', ['browserify'], function() {
    return gulp.src( config.distDir + '/main.bundle.js' )
//        .pipe( jshint() )
//        .pipe( jshint.reporter( 'jshint-stylish' ))
        .pipe( $.rename( 'main.min.js' ))
        .pipe( $.uglify() )
        .pipe( gulp.dest( config.distDir ))
        .pipe( browsersync.reload({ stream: true, once: true }));
    });

gulp.task('styles', function() {
    return gulp.src( config.sassDir + '/**/*.scss' )
        .pipe( $.sass() )
        .pipe( $.autoprefixer( 'last 3 version', 'ie 8', 'ie 9' ))
        .pipe( $.rename({ suffix: '.min' }))
        .pipe( $.minifyCss() )
        .pipe( gulp.dest( config.distDir ))
        .pipe( browsersync.reload({ stream: true }));
});

gulp.task('watch', ['sync'], function() {
    gulp.watch( config.sassDir + '/**/*.scss', [ 'styles' ]);
    gulp.watch( config.jsDir + '/**/*.js', [ 'scripts' ]);
    gulp.watch( "./**/*.html" ).on( 'change', browsersync.reload );
    gulp.watch( "./**/*.php" ).on( 'change', browsersync.reload );
});

gulp.task( 'default', [ 'scripts', 'styles' ]);
