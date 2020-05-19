const path = require('path');
const pluginsConfig = require("../comm/plugin");
const rulesConfig = require("../comm/rule");
const {distDir} = require('../tools/path');
module.exports = {
    entry: {
		// 多入口文件
		a: './src/js/index.js',
		b: './src/js/index2.js',
		jquery: 'jquery'
	},
	output: {
		path: distDir,
		// 打包多出口文件
		// 生成 a.bundle.js  b.bundle.js  jquery.bundle.js
		filename: 'js/[name].bundle.js'
	},
	plugins: pluginsConfig,
	devServer: {
        // publicPath: '/page',
		contentBase: '../../dist',
		host: "localhost",  // win8 下自启浏览器可能是因为没设置为localhost
		port: "8090",
		open: true, // 开启浏览器
		hot: true   // 开启热更新
	},
	// devtool: "source-map",  // 开启调试模式
	module:{
		rules: rulesConfig
	},
	// 提取js，lib1名字可改
	// splitChunkPlugin功能非常强大，想要纤细了解可以查看我的个人博客
	// https://www.cnblogs.com/pomelott/p/9030208.html 
	// 有疑问的可以留言
	optimization: {
		splitChunks: {
			cacheGroups: {
				lib1: {
					chunks: "initial",
					name: "test",  // 此处的name为其他用于使用chunk名字的地方做服务
					enforce: true
				}
			}
		}
	}
}