FROM alpine AS builder
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs nodejs-npm

COPY package.json package-lock.json ./
RUN npm install

FROM alpine
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs nodejs-npm

RUN npm install -g http-server
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .

RUN npm run build
WORKDIR dist
CMD [ "http-server" ]
