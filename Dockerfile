FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY ./src ./src

EXPOSE 3333

CMD [ "npm", "start" ]