# Build stage
FROM node:12-alpine as build

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./
COPY src ./src
COPY public ./public

RUN npm install && npm run build

# Run stage
FROM nginx:1.19.2-alpine

WORKDIR /usr/share/nginx

COPY --from=build /usr/src/app/build ./html

EXPOSE ${PORT}