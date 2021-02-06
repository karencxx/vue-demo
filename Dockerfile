# 导入nginx镜像
# FROM node:12.19.0 as builder
# # 将当前打包工程的html复制到虚拟地址
# COPY package.json ./
# RUN npm install

# COPY . .

# RUN npm run build



# stage1 as builder
FROM node:10-alpine as builder

WORKDIR /vue-ui

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# COPY rest of the files
COPY . .

# Build the project
RUN npm run build


FROM nginx:alpine as production-build
# WORKDIR /usr/src/vue-demo

# replace default.conf with local nginx.conf
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# # 将dist文件中的内容复制到/usr/share/nginx/html目录下，default.conf中有指向
# COPY from the stahg 1
COPY --from=builder /vue-ui/dist /usr/share/nginx/html
# COPY ./dist /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]