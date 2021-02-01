#!/bin/bash
git_url=git@github.com:karencxx/vue-demo-dist.git
# git_url=https://github.com/karencxx/vue-demo-dist.git
source_dir=dist
dest=".deploy/master"

# 当发生错误时中止脚本
set -e

if [ ! -d $dest ]; then
    git clone $git_url $dest --depth=1
fi

# 记录现在的目录位置
cur=`pwd`

# 进入git目录
cd $dest

# git checkout .
git add .
git stash

# reset为线上最新版本
git pull origin master
git reset --hard origin/master
    
# 然后再pull一下
git pull origin master

# 回到原来的目录
echo ---back
cd $cur

# 构建
echo +++run build script
npm run build
echo ---build end

echo +++cpCode start
# 复制代码 , --exclude排除不需要传输的文件模式
rsync -r --delete --exclude='.git' $source_dir/. $dest
echo ---cpCode end

# cd 到构建输出的目录下
cd $dest

echo +++commit start
# 部署到自定义域名
git add .
git commit -m "commit in `date '+%Y-%m-%d %H:%M:%S'`"

# 部署到远程git
git push origin master
echo ---commit end

cd -

exit