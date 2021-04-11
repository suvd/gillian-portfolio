// webpack.settings.js - webpack settings config

// node modules
require('dotenv').config();

// Webpack settings exports
// noinspection WebpackConfigHighlighting
module.exports = {
    name: "Gillian Vandewyer portfolio",
    copyright: "Suzan Van Dijck",
    paths: {
        src: {
            base: "./src/",
            css: "./src/css/",
            js: "./src/js/"
        },
        dist: {
            base: "./web/dist/",
            clean: [
                "./img",
                "./criticalcss",
                "./css",
                "./js"
            ]
        },
        templates: "./templates/"
    },
    urls: {
        live: "https://gillianvandewyer.be/",
        local: "https://gillian-portfolio.test/",
        critical: "https://gillian-portfolio.test/",
        publicPath: () => process.env.PUBLIC_PATH || "/dist/",
    },
    vars: {
        cssName: "styles"
    },
    entries: {
        "app": "app.js"
    },
    babelLoaderConfig: {
        exclude: [
            /(node_modules|bower_components)/
        ],
    },
    copyWebpackConfig: [
        {
            from: "./src/js/workbox-catch-handler.js",
            to: "js/[name].[ext]"
        }
    ],
    criticalCssConfig: {
        base: "./web/dist/criticalcss/",
        suffix: "_critical.min.css",
        criticalHeight: 1200,
        criticalWidth: 1200,
        ampPrefix: "amp_",
        ampCriticalHeight: 19200,
        ampCriticalWidth: 600,
        pages: [
            {
                url: "",
                template: "index"
            }
        ]
    },
    devServerConfig: {
        public: () => process.env.DEVSERVER_PUBLIC || "https://localhost:8080",
        host: () => process.env.DEVSERVER_HOST || "localhost",
        // public: () => process.env.DEVSERVER_PUBLIC || "http://mbpsuzan.local:8080",
        // host: () => process.env.DEVSERVER_HOST || "0.0.0.0",
        poll: () => process.env.DEVSERVER_POLL || false,
        port: () => process.env.DEVSERVER_PORT || 8080,
        https: () => process.env.DEVSERVER_HTTPS || true
    },
    manifestConfig: {
        basePath: ""
    },
    purgeCssConfig: {
        paths: [
            "./templates/**/*.{twig,html}",
            "./src/vue/**/*.{vue,html}"
        ],
        whitelist: [
            "./src/css/components/**/*.{css}"
        ],
        whitelistPatterns: [
            /scroll$/,
            /show$/,
            /active$/,
            /vdp-datepicker$/,
            /date-dropdown-select-wrapper$/
        ],
        extensions: [
            "html",
            "js",
            "twig",
            "vue"
        ]
    },
    saveRemoteFileConfig: [
        {
            url: "https://www.google-analytics.com/analytics.js",
            filepath: "js/analytics.js"
        }
    ],
    createSymlinkConfig: [
        {
            origin: "img/favicons/favicon.ico",
            symlink: "../favicon.ico"
        }
    ],
    webappConfig: {
        logo: "./src/img/favicon-src.png",
        prefix: "img/favicons/"
    },
    workboxConfig: {
        swDest: "../sw.js",
        precacheManifestFilename: "js/precache-manifest.[manifestHash].js",
        importScripts: [
        ],
        exclude: [
            /\.(png|jpe?g|gif|svg|webp)$/i,
            /\.mp3.*$/i,
            /\.map$/,
            /^manifest.*\\.js(?:on)?$/,
        ],
        globDirectory: "./web/",
        globPatterns: [
            "offline.html",
            "offline.svg"
        ],
        offlineGoogleAnalytics: true,
        runtimeCaching: [
            {
                urlPattern: /\/admin.*$/i,
                handler: "networkOnly"
            },
            // See "Serve cached audio and video" https://developers.google.com/web/tools/workbox/guides/advanced-recipes
            {
                urlPattern: /\.mp3.*$/i,
                handler: "networkOnly"
            },
            {
                urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
                handler: "cacheFirst",
                options: {
                    cacheName: "images",
                    expiration: {
                        maxEntries: 20
                    }
                }
            }
        ]
    }
};