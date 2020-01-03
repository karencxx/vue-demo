# 项目结构

>build -- webpack相关配置 cli3 已移除
```bash
 build.js -- webpack打包配置文件
 check-version.js -- 检查npm,nodejs版本
 utils.js -- 配置资源路径,配置css加载器
 vue-loader.conf.js -- 配置css加载器等
 webpack.base.conf.js -- webpack基础配置
 webpack.dev.conf.js -- 开发所用webpack配置
 webpack.prod.conf.js -- 打包用webp配置
```

>config -- 配置文件

>node_modules -- 存放依赖的目录

>src -- 源码
```bash
 assets -- 静态文件
 components -- 组件
 main.js -- 主入口js
 App.vue -- 项目入口组件
 router -- 路由
```

>package.json -- node配置文件

>.babelrc -- babel配置文件 cli3 已移除

>.editorconfig -- 编辑器配置

>.gitignore -- 配置git可忽略的文件
