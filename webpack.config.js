const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	target: "web",
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
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
				],
				include: /\.module\.css$/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /\.module\.css$/,
			},
			{
				test: /\.svg$/,
				use: "file-loader",
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
		contentBase: path.join(__dirname, "public"),
		hot: true,
		open: true,
	},
	plugins: [
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
