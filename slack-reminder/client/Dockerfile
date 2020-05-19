FROM node:12 
RUN mkdir -p /src/app
COPY package.json /src/app
COPY package-lock.json /src/app
COPY src/ /src/app/src
COPY public/ /src/app/public
WORKDIR /src/app/
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent
ENTRYPOINT [ "npm", "run", "start" ]