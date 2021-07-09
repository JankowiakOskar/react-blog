const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackRootPlugin = require("html-webpack-root-plugin");

module.exports = {
	entry: path.resolve(__dirname, "./src/index.js"),
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.js|\.jsx$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].bundle.js",
	},
	devServer: {
		port: 5000,
		publicPath: "/",
		contentBase: "./public",
		hotOnly: true,
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
		new HtmlWebpackPlugin({
			title: "Hot Module Replacement",
			templateContent: `
			<html>
				<body>
					<div id="root"></div>
				</body>
			</html>
		`,
		}),
	],
};
