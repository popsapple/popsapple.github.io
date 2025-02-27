const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports= {
    resolve: {
      alias: {
        '@pages': path.resolve(__dirname, 'src/pages/'),
        '@components': path.resolve(__dirname, 'src/components/'),
        '@utils': path.resolve(__dirname, 'src/utils/'),
        '@styles': path.resolve(__dirname, 'src/styles/')
      },
      extensions: ['.tsx', '.ts', '.js', '.scss']
    },
    entry: './src/ts/index.tsx',
    output: {
        filename: 'entry.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
        publicPath: '/', 
        // 파일들이 나중에 웹에서 어떻게 제공될지를 설정하는 경로입니다, 번들링된 파일에 절대경로를 붙여줍니다.
        // 어떤 CDN 등에 올라갈 경우 경로를 덧붙이기 위해 사용
    },
    module: {
        rules: [
          {
              test: /\.ts|x$/,
              use: 'ts-loader',
              exclude: /node_modules/
          },
          {
              test: /\.module?\.s[ac]ss$/i,
              use: ['style-loader', 
                {
                  loader: 'css-loader',
                  options: {
                    modules: {
                      localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                  }
                }, {
                loader: 'sass-loader',
                options: {
                  additionalData: `$publicPath: "/assets/";`,  // SCSS에서 사용할 base-path를 설정
                }
              }],
              exclude: /node_modules/
          },
          {
            test: /\.(svg|png|jpg|ttf|woff)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[hash].[ext]',  // 파일 이름과 해시값을 포함한 이름으로 파일을 저장
                  outputPath: '/',  // 빌드 디렉토리 내 assets 폴더로 저장
                  publicPath: '/assets/',  // publicPath 설정 (웹에서 이 경로를 통해 접근)
                },
              }
            ],
          },
        ]
    },
    devServer: {
      port: 9000
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html', // 템플릿으로 사용할 HTML 파일
        inject: true
      }),
    ],
}