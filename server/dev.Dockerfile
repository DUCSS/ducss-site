# Run stage
FROM node:12-alpine

ARG SERVER_PORT

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./
COPY src ./src

RUN npm install

EXPOSE ${SERVER_PORT}

CMD ["npm", "run", "dev"]
