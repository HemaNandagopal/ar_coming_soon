import _webpack from "./_webpack";

_webpack.webpackConfig.entry.dev.push("webpack/hot/dev-server");

_webpack.webpackConfig.plugins = [
  new _webpack.webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("dev")
    }
  }) 
];

export default _webpack.webpackConfig;
