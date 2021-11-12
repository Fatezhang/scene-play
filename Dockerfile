FROM node:16-alpine3.14

WORKDIR /app

COPY .nvmrc package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build
