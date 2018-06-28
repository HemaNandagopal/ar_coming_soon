require('babel-core/register');

const env = process.argv[2];
let configFile;
if (env === '--prod') {
    configFile = './webpack.config.prod.js';
} else {
    configFile = './webpack.config.dev.js';
}

module.exports = require(configFile).default;
