FROM node:10.11

MAINTAINER Mark Schenzle <markseisler@gmail.com>

ENV NODE_ENV development

WORKDIR /app
COPY package.json /app

RUN npm install

EXPOSE 8081

CMD npm run start:dev
