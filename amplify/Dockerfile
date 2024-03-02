# 使用するNode.jsのバージョンを指定
FROM node:18

# アプリケーションの作業ディレクトリを指定
WORKDIR /var/www/app

RUN npm install -g npm@10.5.0 \
    npm install -g @aws-amplify/cli \
    npm install -g @vue/cli

# RUN npm install aws-amplify @aws-amplify/ui-components

COPY ./amplify-sample-project/package*.json ./

RUN npm install