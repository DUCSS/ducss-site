# Run stage
FROM node:12-alpine

WORKDIR /usr/src/app

COPY server/package.json server/package-lock.json server/tsconfig.json ./
COPY server/src ./src

RUN npm install

EXPOSE ${SERVER_PORT}

CMD ["npm", "run", "dev"]
