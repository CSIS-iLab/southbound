// webpack v4
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const devMode = process.env.NODE_ENV !== 'production'

// if (!devMode) {
//   process.env.ASSET_PATH = 'https://google.com'
// }

// const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: devMode ? '[name].js' : '[name].[hash].js'
    // publicPath: ASSET_PATH
  },
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    contentBase: './src',
    open: true,
    watchContentBase: true,
    disableHostCheck: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader'
      },
      // {
      //   test: /\.(svg)$/,
      //   exclude: /img\/css-icons/,
      //   loader: 'svg-inline-loader'
      // },
      // {
      //   test: /\.(svg)$/,
      //   include: /img\/css-icons/,
      //   loader: 'file-loader'
      // },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader', options: { sourceMap: false } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
        // use: [
        //   devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
        //   'css-loader',
        //   'postcss-loader',
        //   'sass-loader'
        // ]
      }
    ]
  },
  optimization: {
    usedExports: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: devMode
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          discardDuplicates: { removeAll: true },
          discardComments: { removeAll: true }
        }
      })
    ]
  },

  externals: {
    Highcharts: 'Highcharts'
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // }),
    new CleanWebpackPlugin('dist', {}),
    new CopyWebpackPlugin([
      // {
      //   from: './src/img/',
      //   to: './img/'
      // }
    ]),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}
