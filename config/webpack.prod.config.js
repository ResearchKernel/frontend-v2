const merge = require("webpack-merge");

// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin"); // Add this in top

// Configs
const baseConfig = require("./webpack.base.config");

const prodConfiguration = env => {
  return merge([
    {
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        chunkFilename: "[name].js",
        publicPath: config.get("publicPath")
      },
      optimization: {
        runtimeChunk: "single",
        splitChunks: {
          cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
              priority: 20
            },
            common: {
              name: "common",
              minChunks: 2,
              chunks: "async",
              priority: 10,
              reuseExistingChunk: true,
              enforce: true
            }
          }
        },
        minimizer: [new UglifyJsPlugin()]
      },
      plugins: [
        new CleanWebpackPlugin(["dist"], {
          root: require("path").resolve(__dirname + "/../")
        }),
        new MiniCssExtractPlugin(),
        new OptimizeCssAssetsPlugin(),
        new Visualizer({ filename: "./static/statistics.html" })
      ]
    }
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
};
