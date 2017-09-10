var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "dist"), 
        compress: true,
        port: 8080
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
                test: /\.css/,
                exclude: /(node_modules|bower_components)/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(png|jpg|gif|mp3)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                {
                    loader: 'file-loader',
                    options: {}  
                }
                ]
            }
        ]
    }
};
