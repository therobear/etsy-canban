const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
    favicon: ""
});

// const copyPlugin = new CopyPlugin({
//     patterns: [
//         {
//             from: "public/properties",
//             to: "properties"
//         }
//     ]
// });

module.exports = {
    entry: [
        "@babel/polyfill",
        "./src/index.jsx"
    ],
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env"
                        ]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: '[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.json$/,
                use: {
                    loader: "json"
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        htmlPlugin
    ],
    resolve: {
        extensions: ['.js','.jsx']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    }
};