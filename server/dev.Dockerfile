# Run stage
FROM node:12-alpine

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./
COPY src ./src

RUN npm install

EXPOSE ${API_PORT}

CMD ["npm", "run", "dev"]
