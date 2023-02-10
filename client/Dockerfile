#Light version of Node
FROM mhart/alpine-node

#Changes the working directory for Docker to /client
WORKDIR /client

COPY package*.json /client/

#installs all the /client dependencies
RUN npm install

#Copoes the current directory and contents to the container at /client
COPY . /client/

#Exposes port to public
EXPOSE 3000

# Runs the client app
CMD ["npm", "start"]