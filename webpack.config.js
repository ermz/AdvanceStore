const path = require('path');
const webpack = require('webpack');
module.exports = {
	resolve: {
		fallback: {
			"fs": false,
			"tls": false,
			"net": false,
			"path": false,
			"zlib": false,
			"http": false,
			"https": false,
			"os": false,
			"stream": false,
			"crypto": false,
			"assert": false
		}
	},
	mode: 'development',
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js', // string
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		port: 8080
	},
	plugins: [
    // fix "process is not defined" error:
    // (do "npm install process" before running the build)
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
};