const webpack = require('webpack')
const path = require('path')
const config = require('config')

//const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
//const common = require('./webpack.common.js')

module.exports = //merge(common, 
    {
	entry: './client/clientMain.js',
	node: { 
		fs: 'empty' 
	},
	output: {
		filename: 'app-v' + config.VERSION + '.js',
		libraryTarget: 'var',
		library: 'start',
		path: path.resolve(__dirname, './public/js')
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
    },
    watchOptions: {
        ignored: /node_modules/,
    },   
	plugins: [
    	//new UglifyJSPlugin()
	]
}
//)