# Install prod dependencies stage
FROM node:15-alpine as install_prod

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --production

# Build stage
FROM node:15-alpine as build

ARG HOST
ARG SERVER_PORT_HTTP
ARG SERVER_PORT_HTTPS

WORKDIR /usr/src/app

COPY package.json tsconfig.json ./
COPY src ./src
COPY public ./public
COPY --from=install_prod /usr/src/app/node_modules ./node_modules

ENV REACT_APP_HOST=${HOST}
ENV REACT_APP_SERVER_PORT_HTTP=${SERVER_PORT_HTTP}
ENV REACT_APP_SERVER_PORT_HTTPS=${SERVER_PORT_HTTPS}

RUN yarn build

# Run stage
FROM nginx:1.19.2-alpine

COPY nginx.conf /etc/nginx

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/src/app/build ./

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]