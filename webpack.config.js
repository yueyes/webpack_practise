// webpack.config.js
const path = require('path');



module.exports = {
	entry: './src/index.js',
	output: { // webpack打包後出口檔案
		filename: 'component.js', // 打包後js檔名稱
		libraryTarget: "var",
		library: "Entrypoint",
		path: path.resolve(__dirname, 'lib') // 打包後自動輸出目錄
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			}
		}, {
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.(png|svg|jpg|gif)$/,
			use: ['url-loader']
		}, {
			test: /\.(woff|woff2|eot|ttf|otf)$/,
			use: ['url-loader']
		}]
	}
}