const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
console.log(process.env.NODE_ENV);
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    index: "./src/app.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Single Product wit Styled Component",
      template: "./src/template.html",
    }),
  ],
  output: {
    filename: "[name]_bundle_[hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  devServer: {
    contentBase: "./dist",
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)/i,
        type: "asset/resource",
      },
      {
        test: /\.jsx?$/i,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    // alias: {
    //   "react-dom": "@hot-loader/react-dom",
    // },
  },
};
