FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g http-server
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080
WORKDIR dist
CMD [ "http-server" ]
