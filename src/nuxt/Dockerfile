FROM alpine AS builder
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs nodejs-npm

COPY package.json package-lock.json ./
RUN npm install --production

FROM alpine
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs nodejs-npm

ENV NODE_ENV=production
ENV HOST 0.0.0.0

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .

RUN npm run build
CMD [ "npm", "start" ]
