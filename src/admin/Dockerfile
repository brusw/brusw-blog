FROM alpine AS builder
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs yarn

COPY package.json yarn.lock ./
RUN yarn install

FROM alpine
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs yarn

RUN yarn global add http-server
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .

RUN yarn run build
WORKDIR dist
CMD [ "http-server" ]
