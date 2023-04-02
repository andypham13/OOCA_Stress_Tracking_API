FROM node:18-buster-slim

RUN npm install -g nodemon

ENV NODE_PATH /usr/local/lib/node_modules

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

USER node