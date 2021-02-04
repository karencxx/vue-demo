const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    lintOnSave: false,
    devServer: {
        port: 8080,
        proxy: '', //设置代理
        inline: true, // 实时刷新
        hot: true
    },
    css: {
        requireModuleExtension: false, // 启用css modules
        extract: true, // 是否使用css分离插件
        sourceMap: false,
        loaderOptions: {
            less: {
                javascriptEnabled: true,
                globalVars: {
                    global_prefix: 'ssss'
                }
            }
        }
    },
    chainWebpack: config => {
        config
        .plugin('html')
        .tap(args => {
            if(process.env.dev) {
                args[0].template = './public/index.html'
            }
            return args
        })

        config.resolve.alias
            .set('static', resolve('public/static'))
            .set('@', resolve('src'))
    },
    configureWebpack: config => {
        if(process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置
        } else {
        
            // 为开发环境修改配置
        }
    }
}