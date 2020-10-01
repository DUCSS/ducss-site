# Build stage
FROM node:12-alpine as build

ARG HOST
ARG SERVER_PORT

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./
COPY src ./src
COPY public ./public

ENV REACT_APP_HOST=${HOST}
ENV REACT_APP_SERVER_PORT=${SERVER_PORT}

RUN npm install && npm run build

# Run stage
FROM nginx:1.19.2-alpine

ARG PORT

COPY nginx.conf /etc/nginx

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/src/app/build ./

EXPOSE ${PORT}

CMD ["nginx", "-g", "daemon off;"]