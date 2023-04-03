FROM node:18-buster-slim

RUN npm install -g nodemon

RUN apt-get update && apt-get install -y imagemagick

ENV NODE_PATH /usr/local/lib/node_modules

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

USER node

CMD ["npm", "run", "dev"]