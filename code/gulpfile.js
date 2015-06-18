var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    compilerConfig = require('./webpack.config');

gulp.task('webpack', function(cb) {
    var myConfig = Object.create(compilerConfig);

    webpack(myConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }

        gutil.log("[webpack]", stats.toString({
            // output options
        }));

        cb();
    });
});

gulp.task('webpack-dev-server', function(cb) {
    var myConfig = Object.create(compilerConfig);
	//myConfig.devtool = "eval";
	myConfig.debug = true;

    var compiler = webpack(myConfig);

    new WebpackDevServer(compiler, {
        publicPath: "/" + myConfig.output.publicPath,
        stats: {
            colors: true
        },
        hot: true
    }).listen(8080, 'localhost', function(err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }

        // Server is listening!
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    });
});


gulp.task("default", ["webpack-dev-server"]);
