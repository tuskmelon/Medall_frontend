const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production', // or 'production' or "development"
    entry: './src/index.js', // Adjust based on your entry file
    output: {
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/[name][ext]',
        path: path.resolve(__dirname, 'dist'), // Adjust based on your desired output path
        publicPath: '/'
    },
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: 'all'
        },
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin(),],
    },
    performance: {
        maxAssetSize: 700 * 1024,
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.json$/,
                type: 'asset/resource',
            },
            {
                test: /\.xml$/,
                type: 'asset/resource',
            },
            {
                test: /\.txt$/,
                type: 'asset/resource',
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 80, // Adjust the quality (0 to 100)
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            svgo: {
                                removeViewBox: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.mp4$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.pdf$/,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
        new BundleAnalyzerPlugin(),
    ],
    devServer: {
        liveReload: true,
        magicHtml: true,
        historyApiFallback: true,
        client: {
            overlay:false,
        },
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        allowedHosts: ['www.medall.in', 'medall.in'],
    },
};

