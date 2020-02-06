FROM alpine AS builder
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs yarn

COPY package.json yarn.lock ./
RUN yarn install --production

FROM alpine
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs yarn

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .
CMD [ "node", "app.js" ]
