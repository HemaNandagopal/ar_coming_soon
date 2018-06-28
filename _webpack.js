import webpack from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";

const webpackConfig = {
  entry: {
    dev: ["./demo/demo.js"],
    dist: ["./src/main.js"]
  },
  output: {
    path: "./",
    filename: "./build/[name].poc.js",
    libraryTarget: "umd"
  },
  contentBase: "./demo", // for webpack dev server
  module: {
    preLoaders: [
      // {
      // test: /\.js$/,
      // loader: 'eslint',
      // exclude: /node_modules/
      // }
    ],
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css!sass' // sass -> css -> javascript -> inline style
    }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react', 'stage-0']
        }
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./fonts", to: "./build/fonts" } 
    ])
  ]
};

const _webpack = {
  webpackConfig,
  webpack
};

export default _webpack;
