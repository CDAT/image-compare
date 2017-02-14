/* global __dirname */
module.exports = {
    entry: "./js/index.js",
    devtool: 'source-map',
    output: {
        path: __dirname + "/jsbuild",
        filename: "image-compare.js",
        libraryTarget: "var",
        library: "ImageCompare"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    }
};
