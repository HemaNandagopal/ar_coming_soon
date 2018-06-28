import _webpack from './_webpack';
const WebpackMd5Hash = require('webpack-md5-hash');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpack = _webpack.webpack;
_webpack.webpackConfig.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new WebpackMd5Hash(),
    new ManifestPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false, // Suppress uglification warnings
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            screw_ie8: true
        },
        output: {
            comments: false
        },
        exclude: [/\.min\.js$/gi], // skip pre-minified libs
        mangle: true,
        beautify: false
    })
];

export default _webpack.webpackConfig;
