# Build stage
FROM node:12-alpine as build

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./
COPY src ./src
COPY public ./public

RUN npm install && npm run build

# Run stage
FROM nginx:1.19.2-alpine

COPY nginx.conf /etc/nginx

WORKDIR /usr/share/nginx/html

COPY --from=build /usr/src/app/build ./

EXPOSE ${PORT}

CMD ["nginx", "-g", "daemon off;"]