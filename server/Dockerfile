# Build stage
FROM node:12-alpine as build

WORKDIR /usr/src/app

COPY server/package.json server/package-lock.json server/tsconfig.json ./
COPY server/src ./src

RUN npm install && npm run build

# Run stage
FROM node:12-alpine

WORKDIR /usr/src/app

COPY server/package.json server/package-lock.json ./
COPY --from=build /usr/src/app/dist ./dist

RUN npm ci --production

EXPOSE ${SERVER_PORT}

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "dist/app.js"]
