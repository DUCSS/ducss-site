FROM node:10
# Create app directory, where the code will contained inside the Docker Container
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Copy source code 
COPY . .
EXPOSE 80

RUN npm install -g nodemon

# CMD [ "npm", "start" ]
CMD ["nodemon"]