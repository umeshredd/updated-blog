FROM node:8
WORKDIR /home/niveus/pokedex
COPY package.json /home/niveus/pokedex/
RUN npm install && npm install express && npm install path
COPY . /home/niveus/pokedex/
RUN npm run build
CMD node index.js
EXPOSE 8080
