'use strict';

const path = require('path');

// Process script files
const ESLintPlugin = require('eslint-webpack-plugin');

// Extract and process CSS chunks
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

// Process CSS files
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

// Process HTML templates 
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Process SVG files
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// Set environment switch
const buildDir = process.env.NODE_ENV === 'production' ? 'dist' : 'dev';

// Default configuration
const config = {
  mode: process.env.NODE_ENV,
  context: path.resolve(__dirname, 'src'),
  entry: {
    fractal: './assets-fractal.js',
    vanda: './assets-vanda.js'
  },
  output: {
    clean: true,
    filename: buildDir === 'dev' ? 'scripts/[name].js' : 'scripts/[name].[contenthash].js',
    path: path.resolve(__dirname, buildDir)
  },
  // optimization: {
  //   minimizer: [
  //     new CssMinimizerPlugin({
  //       parallel: true
  //     })
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: 'css-loader'
          }, 
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  postcssPresetEnv()
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'svg/vam-sprite.svg',
              esModule: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: buildDir === 'dev' ? 'styles/[name].css' : 'styles/[name].[contenthash].css'
    }),
    // new CssMinimizerPlugin(),
    new StylelintPlugin(),
    new HtmlWebpackPlugin({
      template: 'components/_preview-layouts/_preview-template.html',
      filename: path.resolve(__dirname, 'src') + '/components/_preview-layouts/_preview.html'
    }),
    new SpriteLoaderPlugin({
      plainSprite: true
    })
  ]
};

module.exports = config;
