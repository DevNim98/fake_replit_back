FROM node:alpine

RUN apk add --no-cache python3 py-pip

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]