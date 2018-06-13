const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack')
const path = require('path')
const PurifycssWebpack = require('purifycss-webpack')
const glob = require('glob')
const env = process.env.NODE_ENV
console.log(env)

module.exports = {
  mode: 'development',
  entry: "./src/index.ts",
  output: {
    filename: "bundle.[hash:9].js",
    path: __dirname + "/dist"
  },

  devServer: {
    contentBase: './build',
    // 自动在浏览器内打开 端口号
    port: 3000,
    // 是否压缩
    compress: true,
    hot: true,
    watchContentBase: true
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by
      // 'awesome-typescript-loader'.
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "awesome-typescript-loader"
          }
        ]
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: env === 'production'
              }
            }
          ]
        })
      }, {
        test: /\.scss?$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'postcss-loader'
            }, {
              loader: 'sass-loader'
            }
          ]
        })
      }, {
        test: /\.html$/,
        loader: "raw-loader"
      },

      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader', {
            loader: 'image-webpack-loader',
            options: {
              disable: true, // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: "H5 - draggable",
      minify: {
        removeAttributeQuotes: true,
        removeTagWhitespace: true,
        collapseWhitespace: true
      },
      inject: 'body',
      hash: true
    }),
    new CleanWebpackPlugin(['./dist']),
    new ExtractTextPlugin({
      filename: "./css/style.[hash].css",
      disable: env === 'dev'
    }),
    // 没用的css会被删除掉, 必须放在 HtmlWebpackPlugin后面
    new PurifycssWebpack({
      paths: glob.sync(path.resolve('src/*.html'))
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
      })]
  }
};