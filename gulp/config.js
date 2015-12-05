// To set production mode and run: NODE_ENV=production gulp
// To set development mode and run: NODE_ENV=development gulp watch
var env = process.env.NODE_ENV || 'production';

var config = {
    sourceMaps: env === 'development',
    uglifyJs: env !== 'development'
};

module.exports = config;