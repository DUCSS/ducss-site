# Install dev dependencies stage
FROM node:15-alpine as install_dev

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

# Run stage
FROM node:15-alpine

ARG PORT

WORKDIR /usr/src/app

COPY package.json tsconfig.json ./
COPY src ./src
COPY public ./public
COPY --from=install_dev /usr/src/app/node_modules ./node_modules

EXPOSE ${PORT}

CMD ["npm", "start"]
