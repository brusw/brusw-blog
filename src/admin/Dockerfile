FROM alpine AS builder
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs yarn

COPY package.json yarn.lock ./
RUN yarn install

FROM alpine AS publisher
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs yarn

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .
RUN yarn run build

FROM alpine
WORKDIR /usr/src/app
RUN apk add --no-cache --update nginx

COPY --from=publisher /usr/src/app/dist ./dist
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/src/app/dist
CMD [ "nginx", "-g", "daemon off;" ]
