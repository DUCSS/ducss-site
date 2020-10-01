# Install dev dependencies stage
FROM node:12-alpine as install_dev

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

# Run stage
FROM node:12-alpine

ARG SERVER_PORT

WORKDIR /usr/src/app

COPY package.json tsconfig.json ./
COPY src ./src
COPY --from=install_dev /usr/src/app/node_modules ./node_modules

EXPOSE ${SERVER_PORT}

CMD ["npm", "run", "dev"]
