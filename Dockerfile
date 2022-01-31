FROM node:16-slim as build

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .

COPY . ./

RUN yarn install --pure-lockfile

WORKDIR /usr/src/app
CMD [ "yarn", "start" ]
