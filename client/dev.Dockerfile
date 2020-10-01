# Run stage
FROM node:12-alpine

ARG PORT

WORKDIR /usr/src/app

COPY package.json package-lock.json tsconfig.json ./
COPY src ./src
COPY public ./public

RUN npm install

EXPOSE ${PORT}

CMD ["npm", "start"]
