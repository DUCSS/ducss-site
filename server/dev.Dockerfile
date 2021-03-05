# Install dev dependencies stage
FROM node:15-alpine as install_dev

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN yarn install

# Run stage
FROM node:15-alpine

ARG SERVER_PORT_HTTP

WORKDIR /usr/src/app

COPY package.json tsconfig.json ./
COPY src ./src
COPY --from=install_dev /usr/src/app/node_modules ./node_modules

EXPOSE ${SERVER_PORT_HTTP}

CMD ["yarn", "dev"]
