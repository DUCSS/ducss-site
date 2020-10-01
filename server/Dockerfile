# Install dev dependencies stage
FROM node:12-alpine as install_dev

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

# Build stage
FROM node:12-alpine as build

WORKDIR /usr/src/app

COPY package.json tsconfig.json ./
COPY src ./src
COPY --from=install_dev /usr/src/app/node_modules ./node_modules

RUN npm run build

# Install prod dependencies stage
FROM node:12-alpine as install_prod

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci --production

# Run stage
FROM node:12-alpine

ARG SERVER_PORT

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY --from=build /usr/src/app/dist ./dist
COPY --from=install_prod /usr/src/app/node_modules ./node_modules

EXPOSE ${SERVER_PORT}

RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "dist/app.js"]
