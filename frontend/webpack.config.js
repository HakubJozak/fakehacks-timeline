const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const Extract = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const autoprefixer = require('autoprefixer');
const reset = require('postcss-css-reset');

const packages = require('./package.json');

const enviroment = process.env.NODE_ENV;
const buildEnviroment = process.env.BUILD_ENV;

const PATHS = {
    app: path.join(__dirname, 'src', 'app'),
    build: path.join(__dirname, 'build')
};

const FILENAMES = {
    build: 'js/[name].[chunkhash].js',
    vendor: 'js/vendors.[chunkhash].js',
    runtime: 'js/runtime.[chunkhash].js',
    sass: 'css/sass.[chunkhash].css',
    html: 'index.html',
    font: 'fonts/[hash].[ext]',
    image: 'images/[hash].[ext]',
    stats: 'stats/index.html',
    devTemplate: 'src/templates/dev.html',
    prodTemplate: 'src/templates/prod.html',
};

console.warn(`Building Webpack project with NODE_ENV="${enviroment}"; BUILD_ENV="${buildEnviroment}";`);

const config = {
    entry: {
        app: PATHS.app,
        vendor: Object.keys(packages.dependencies).filter(item => item !== 'ackee-frontend-toolkit'),
    },
    output: {
        path: PATHS.build,
        filename: FILENAMES.build,
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                loader: Extract.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    reset(),
                                    autoprefixer({ browsers: ['last 2 versions'] }),
                                ],
                            },
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ],
                }),
            },
            {
                test: /\.(ttf|otf|eot|woff[2]?)(\?(v=)?[\d.]*)?$/,
                loader: `file-loader?name=${FILENAMES.font}`,
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader?removeTags=true,removingTags=["title", "desc", "defs"]'
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                loader: `url-loader?name=${FILENAMES.image}&limit=25000/`,
            },
            {
                test: /\.yml$/,
                loader: 'json-loader!yaml-loader',
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
        ]
    },
    plugins: [
        new Extract({
            filename: FILENAMES.sass,
        }),
        new webpack.EnvironmentPlugin([
            'NODE_ENV',
            'BUILD_ENV'
        ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: FILENAMES.vendor,
            minChunks: Infinity,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: FILENAMES.common,
            minChunks: 2,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime',
            filename: FILENAMES.runtime,
        }),
        new Visualizer({
            filename: FILENAMES.stats,
        })
    ]
};

const envConfig = {};

if (enviroment === 'production') {
    /*
    envConfig.module = {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: "pre",
                options: {
                    cache: true,
                    failOnError: true,
                }
            }
        ]
    }
    */
    envConfig.plugins = [
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
        }),
        new HtmlPlugin({
            filename: FILENAMES.html,
            template: FILENAMES.prodTemplate,
        })
    ];
} else {
    envConfig.plugins = [
        new webpack.NamedModulesPlugin(),
        new HtmlPlugin({
            filename: FILENAMES.html,
            template: FILENAMES.devTemplate,
        })
    ];
    envConfig.devServer = {
        historyApiFallback: true,
        contentBase: path.join(__dirname),
        port: 9000
    };
    envConfig.devtool = 'source-map';
}

module.exports = merge(config, envConfig);
