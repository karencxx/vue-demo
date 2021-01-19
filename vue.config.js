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
                javascriptEnabled: true
            }
        }
    }
}