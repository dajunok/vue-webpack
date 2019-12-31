module.exports={
    "mode": "production",
    "context": "F:\\FrontendProjects\\vue-webpack",
    "devtool": "source-map",
    "node": {
        "setImmediate": false,
        "process": "mock",
        "dgram": "empty",
        "fs": "empty",
        "net": "empty",
        "tls": "empty",
        "child_process": "empty"
    },
    "output": {
        "path": "F:\\FrontendProjects\\vue-webpack\\dist",
        "filename": "js/[name].[contenthash:8].js",
        "publicPath": "/",
        "chunkFilename": "js/[name].[contenthash:8].js"
    },
    "resolve": {
        "alias": {
            "@": "F:\\FrontendProjects\\vue-webpack\\src",
            "vue$": "vue/dist/vue.runtime.esm.js"
        },
        "extensions": [".mjs", ".js", ".jsx", ".vue", ".json", ".wasm"],
        "modules": ["node_modules", "F:\\FrontendProjects\\vue-webpack\\node_modules", "F:\\FrontendProjects\\vue-webpack\\node_modules\\@vue\\cli-service\\node_modules"]
    },
    "resolveLoader": {
        "modules": ["F:\\FrontendProjects\\vue-webpack\\node_modules\\@vue\\cli-plugin-babel\\node_modules", "node_modules", "F:\\FrontendProjects\\vue-webpack\\node_modules", "F:\\FrontendProjects\\vue-webpack\\node_modules\\@vue\\cli-service\\node_modules"]
    },
    "module": {
        "noParse": {},
        "rules": [{
            "test": {},
            "use": [{
                "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\cache-loader\\dist\\cjs.js",
                "options": {
                    "cacheDirectory": "F:\\FrontendProjects\\vue-webpack\\node_modules\\.cache\\vue-loader",
                    "cacheIdentifier": "088a2127"
                }
            },
            {
                "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\vue-loader\\lib\\index.js",
                "options": {
                    "compilerOptions": {
                        "whitespace": "condense"
                    },
                    "cacheDirectory": "F:\\FrontendProjects\\vue-webpack\\node_modules\\.cache\\vue-loader",
                    "cacheIdentifier": "088a2127"
                }
            }]
        },
        {
            "test": {},
            "use": [{
                "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\url-loader\\dist\\cjs.js",
                "options": {
                    "limit": 4096,
                    "fallback": {
                        "loader": "file-loader",
                        "options": {
                            "name": "img/[name].[hash:8].[ext]"
                        }
                    }
                }
            }]
        },
        {
            "test": {},
            "use": [{
                "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\file-loader\\dist\\cjs.js",
                "options": {
                    "name": "img/[name].[hash:8].[ext]"
                }
            }]
        },
        {
            "test": {},
            "use": [{
                "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\url-loader\\dist\\cjs.js",
                "options": {
                    "limit": 4096,
                    "fallback": {
                        "loader": "file-loader",
                        "options": {
                            "name": "media/[name].[hash:8].[ext]"
                        }
                    }
                }
            }]
        },
        {
            "test": {},
            "use": [{
                "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\url-loader\\dist\\cjs.js",
                "options": {
                    "limit": 4096,
                    "fallback": {
                        "loader": "file-loader",
                        "options": {
                            "name": "fonts/[name].[hash:8].[ext]"
                        }
                    }
                }
            }]
        },
        {
            "test": {},
            "oneOf": [{
                "resourceQuery": {},
                "use": [{
                    "loader": "pug-plain-loader"
                }]
            },
            {
                "use": [{
                    "loader": "raw-loader"
                },
                {
                    "loader": "pug-plain-loader"
                }]
            }]
        },
        {
            "test": {},
            "oneOf": [{
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                }]
            },
            {
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                }]
            },
            {
                "test": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                }]
            },
            {
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                }]
            }]
        },
        {
            "test": {},
            "oneOf": [{
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                }]
            },
            {
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                }]
            },
            {
                "test": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                }]
            },
            {
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                }]
            }]
        },
        {
            "test": {},
            "oneOf": [{
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "sass-loader",
                    "options": {
                        "sourceMap": false
                    }
                }]
            },
            {
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "sass-loader",
                    "options": {
                        "sourceMap": false
                    }
                }]
            },
            {
                "test": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "sass-loader",
                    "options": {
                        "sourceMap": false
                    }
                }]
            },
            {
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "sass-loader",
                    "options": {
                        "sourceMap": false
                    }
                }]
            }]
        },
        {
            "test": {},
            "oneOf": [{
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "sass-loader",
                    "options": {
                        "sourceMap": false,
                        "sassOptions": {
                            "indentedSyntax": true
                        }
                    }
                }]
            },
            {
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "sass-loader",
                    "options": {
                        "sourceMap": false,
                        "sassOptions": {
                            "indentedSyntax": true
                        }
                    }
                }]
            },
            {
                "test": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "sass-loader",
                    "options": {
                        "sourceMap": false,
                        "sassOptions": {
                            "indentedSyntax": true
                        }
                    }
                }]
            },
            {
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "sass-loader",
                    "options": {
                        "sourceMap": false,
                        "sassOptions": {
                            "indentedSyntax": true
                        }
                    }
                }]
            }]
        },
        {
            "test": {},
            "oneOf": [{
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\less-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false
                    }
                }]
            },
            {
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\less-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false
                    }
                }]
            },
            {
                "test": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\less-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false
                    }
                }]
            },
            {
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\less-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false
                    }
                }]
            }]
        },
        {
            "test": {},
            "oneOf": [{
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "stylus-loader",
                    "options": {
                        "sourceMap": false,
                        "preferPathResolver": "webpack"
                    }
                }]
            },
            {
                "resourceQuery": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "stylus-loader",
                    "options": {
                        "sourceMap": false,
                        "preferPathResolver": "webpack"
                    }
                }]
            },
            {
                "test": {},
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2,
                        "modules": {
                            "localIdentName": "[name]_[local]_[hash:base64:5]"
                        }
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "stylus-loader",
                    "options": {
                        "sourceMap": false,
                        "preferPathResolver": "webpack"
                    }
                }]
            },
            {
                "use": [{
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\mini-css-extract-plugin\\dist\\loader.js",
                    "options": {
                        "hmr": false,
                        "publicPath": "../"
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\css-loader\\dist\\cjs.js",
                    "options": {
                        "sourceMap": false,
                        "importLoaders": 2
                    }
                },
                {
                    "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\postcss-loader\\src\\index.js",
                    "options": {
                        "sourceMap": false,
                        "plugins": [null]
                    }
                },
                {
                    "loader": "stylus-loader",
                    "options": {
                        "sourceMap": false,
                        "preferPathResolver": "webpack"
                    }
                }]
            }]
        },
        {
            "test": {},
            "exclude": [null],
            "use": [{
                "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\cache-loader\\dist\\cjs.js",
                "options": {
                    "cacheDirectory": "F:\\FrontendProjects\\vue-webpack\\node_modules\\.cache\\babel-loader",
                    "cacheIdentifier": "892b85e2"
                }
            },
            {
                "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\thread-loader\\dist\\cjs.js"
            },
            {
                "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\babel-loader\\lib\\index.js"
            }]
        },
        {
            "enforce": "pre",
            "test": {},
            "exclude": [{},
            "F:\\FrontendProjects\\vue-webpack\\node_modules\\@vue\\cli-service\\lib"],
            "use": [{
                "loader": "F:\\FrontendProjects\\vue-webpack\\node_modules\\eslint-loader\\index.js",
                "options": {
                    "extensions": [".js", ".jsx", ".vue"],
                    "cache": true,
                    "cacheIdentifier": "ece6f8ca",
                    "emitWarning": false,
                    "emitError": false,
                    "eslintPath": "F:\\FrontendProjects\\vue-webpack\\node_modules\\eslint"
                }
            }]
        }]
    },
    "optimization": {
        "splitChunks": {
            "cacheGroups": {
                "vendors": {
                    "name": "chunk-vendors",
                    "test": {},
                    "priority": -10,
                    "chunks": "initial"
                },
                "common": {
                    "name": "chunk-common",
                    "minChunks": 2,
                    "priority": -20,
                    "chunks": "initial",
                    "reuseExistingChunk": true
                }
            }
        },
        "minimizer": [{
            "options": {
                "test": {},
                "extractComments": false,
                "sourceMap": true,
                "cache": true,
                "parallel": true,
                "terserOptions": {
                    "compress": {
                        "arrows": false,
                        "collapse_vars": false,
                        "comparisons": false,
                        "computed_props": false,
                        "hoist_funs": false,
                        "hoist_props": false,
                        "hoist_vars": false,
                        "inline": false,
                        "loops": false,
                        "negate_iife": false,
                        "properties": false,
                        "reduce_funcs": false,
                        "reduce_vars": false,
                        "switches": false,
                        "toplevel": false,
                        "typeofs": false,
                        "booleans": true,
                        "if_return": true,
                        "sequences": true,
                        "unused": true,
                        "conditionals": true,
                        "dead_code": true,
                        "evaluate": true
                    },
                    "mangle": {
                        "safari10": true
                    }
                }
            }
        }]
    },
    "plugins": [{},
    {
        "definitions": {
            "process.env": {
                "NODE_ENV": "\"production\"",
                "BASE_URL": "\"/\""
            }
        }
    },
    {
        "options": {},
        "pathCache": {},
        "fsOperations": 0,
        "primed": false
    },
    {
        "compilationSuccessInfo": {},
        "shouldClearConsole": true,
        "formatters": [null, null, null, null],
        "transformers": [null, null, null, null],
        "previousEndTimes": {}
    },
    {
        "options": {
            "filename": "css/[name].[contenthash:8].css",
            "ignoreOrder": false,
            "chunkFilename": "css/[name].[contenthash:8].css"
        }
    },
    {
        "options": {
            "sourceMap": false,
            "cssnanoOptions": {
                "preset": ["default", {
                    "mergeLonghand": false,
                    "cssDeclarationSorter": false
                }]
            }
        }
    },
    {
        "options": {
            "context": null,
            "hashFunction": "md4",
            "hashDigest": "hex",
            "hashDigestLength": 4
        }
    },
    {},
    {
        "options": {
            "template": "F:\\FrontendProjects\\vue-webpack\\public\\index.html",
            "filename": "index.html",
            "hash": false,
            "inject": true,
            "compile": true,
            "favicon": false,
            "minify": {
                "removeComments": true,
                "collapseWhitespace": true,
                "removeAttributeQuotes": true,
                "collapseBooleanAttributes": true,
                "removeScriptTypeAttributes": true
            },
            "cache": true,
            "showErrors": true,
            "chunks": "all",
            "excludeChunks": [],
            "chunksSortMode": "auto",
            "meta": {},
            "title": "Webpack App",
            "xhtml": false
        }
    },
    {
        "options": {
            "rel": "preload",
            "include": "initial",
            "excludeHtmlNames": [],
            "fileBlacklist": [{},{}]
        }
    },
    {
        "options": {
            "rel": "prefetch",
            "include": "asyncChunks",
            "excludeHtmlNames": [],
            "fileBlacklist": [{}]
        }
    },
    {
        "patterns": [{
            "from": "F:\\FrontendProjects\\vue-webpack\\public",
            "to": "F:\\FrontendProjects\\vue-webpack\\dist",
            "toType": "dir",
            "ignore": [".DS_Store", {
                "glob": "index.html",
                "matchBase": false
            }]
        }],
        "options": {}
    }],
    "entry": {
        "app": ["./src/main.js"]
    }
};