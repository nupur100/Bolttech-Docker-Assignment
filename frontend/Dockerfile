FROM node:10-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8084

CMD ["node", "server.js"]