FROM node:12-alpine as baase

RUN npm install -g ts-node typescript nodemon

WORKDIR /app

RUN apk add curl

CMD npm i --unsafe-perm; npm start