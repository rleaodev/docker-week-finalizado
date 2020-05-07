FROM node:alpine

COPY . /app
WORKDIR /app

RUN npm install

ENV MONGO_URL="mongodb://meu-db:27017/docker-week"
EXPOSE 3000

CMD ["npm", "start"]