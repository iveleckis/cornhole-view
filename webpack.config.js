const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    liveReload: true,
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
