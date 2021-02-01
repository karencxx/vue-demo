# 导入nginx镜像
# FROM node:12.19.0 as builder
# # 将当前打包工程的html复制到虚拟地址
# COPY package.json ./
# RUN npm install

# COPY . .

# RUN npm run build

FROM nginx:alpine as production-build
WORKDIR /usr/src/vue-demo
# 用本地default.conf 替换nginx镜像里的默认配置
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
# 将dist文件中的内容复制到/usr/share/nginx/html目录下，default.conf中有指向
# COPY --from=builder /usr/src/vue-demo/dist /usr/share/nginx/html
COPY ./dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]