#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下
cd dist

# 部署到自定义域名

git init 
git add -A
git commit -m "commit in `date '+%Y-%m-%d_%H:%M:%S'`"

# 部署到远程git
# git push -f https://github.com/karencxx/vue-demo-dist.git

cd -