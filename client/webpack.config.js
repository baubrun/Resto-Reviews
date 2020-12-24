const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        open: true,
        port: 3000
    },
    performance: {
        hints: false
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [{
                    loader: 'file-loader',
                }, ],
            },
        ]
    },
    resolve: {
        mainFiles: ["index"],
        extensions: [".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
}