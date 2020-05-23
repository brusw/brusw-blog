FROM alpine AS builder
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs yarn

COPY package.json yarn.lock ./
RUN yarn install --production

FROM alpine
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs yarn

ENV NODE_ENV=production
ENV HOST 0.0.0.0

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .

RUN yarn run build
CMD [ "yarn", "start" ]
