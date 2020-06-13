FROM alpine AS builder
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs yarn

COPY . .
RUN yarn install && yarn run build

FROM alpine
WORKDIR /usr/src/app
RUN apk add --no-cache --update nginx

COPY --from=builder /usr/src/app/dist ./dist
COPY nginx.conf /etc/nginx/nginx.conf
CMD [ "nginx", "-g", "daemon off;" ]
