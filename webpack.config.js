var path = require('path');

module.exports = {
    entry: './app/genjs/webapp.js',
    output: {
        filename: 'webapp.js',
        path: path.resolve(__dirname, 'webpack')
    }}