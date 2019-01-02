const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin"); // Add this in top

const APP_DIR = path.resolve(__dirname, "../src"); // <===== new stuff added here

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: ["@babel/polyfill", APP_DIR], // <===== new stuff added here
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.*css$/,
            use: [
              PLATFORM === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
              "css-loader",
              "sass-loader"
            ]
          }
        ]
      },
      plugins: [
        new CopyWebpackPlugin([{ from: "src/static", to: "static" }]),
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
          "process.env.VERSION": JSON.stringify(env.VERSION),
          "process.env.PLATFORM": JSON.stringify(env.PLATFORM)
        })
      ]
    }
  ]);
};
