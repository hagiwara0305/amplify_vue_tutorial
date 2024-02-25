# FROM nikolaik/python-nodejs:python3.8-nodejs12

# WORKDIR /var/www/app

# # COPY ./amplify-sample-project/package.json ./

# # amplify CLI
# RUN npm install -g @aws-amplify/cli
# RUN npm install -g @vue/cli
# RUN npm install

FROM node:14

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install

COPY . .