FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY package-lock.json ./app
COPY package.json ./app

COPY . .

RUN yarn --pure-lockfile
RUN yarn add react-scripts@3.4.1 -g --silent

CMD [ "npm", "start" ]