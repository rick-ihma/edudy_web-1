const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader",
                    options: {
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    }
                }]
            },
            {
                test:/\.ttf$/,
                use: [
                    {
                      loader: 'ttf-loader',
                      options: {
                        name: './font/[hash].[ext]',
                      },
                    },
                  ]
            }
        ]
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ]
};