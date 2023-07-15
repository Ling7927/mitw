FROM node:18.4.0-buster-slim

WORKDIR /

RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app

COPY . /app

RUN npm install pm2@latest serve -g 

RUN npm install

RUN npm run build


EXPOSE 3000

CMD [ "pm2-runtime" , "start", "pm2-process.json"]