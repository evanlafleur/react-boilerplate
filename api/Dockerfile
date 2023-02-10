#Light version of Node
FROM mhart/alpine-node

#Changes the working directory for Docker to /api
WORKDIR /api

COPY package*.json /api/

#installs all the /api dependencies
RUN npm install

#Copoes the current directory and contents to the container at /api
COPY . /api/

#Exposes port to public
EXPOSE 80

# Runs the client app
CMD ["npm", "start"]