const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports= {
    entry: './src/ts/index.tsx',
    output: {
        filename: 'entry.js',
        path: path.resolve(__dirname, 'build/js'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts|x$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s|css$/,
                use: ['style-loader', 'css-loader', 'scss-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "./public/index.html",
            to: "../index.html",
          }
        ],
      }),
      new CleanWebpackPlugin()
    ],
}