var path = require('path'),
    webpack = require('webpack');

module.exports = {
    cache: true,
    entry: {
        app: [ 'webpack/hot/dev-server', './src/client/app.jsx' ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'assets/js',
        filename: 'bundle.js'
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    optional: ['runtime'],
                    stage: 1
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!cssnext-loader"
            }
        ]
    },
    devServer: {
        hot: true,
        publicPath: 'assets/js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    cssnext: {
        browsers: "last 2 versions",
        features: {
            customProperties: {
                variables: {
                    'main-color': "#f00"
                }
            },
            customMedia: {
                extensions: {
                    '--mobile': 'screen and (min-width: 1px)',
                    '--tablet': 'screen and (min-width: 719px)',
                    '--s-desktop': 'screen and (min-width: 1023px)',
                    '--l-desktop': 'screen and (min-width: 1199px)'
                },
                appendExtensions: true
            }
        }
    }
};
