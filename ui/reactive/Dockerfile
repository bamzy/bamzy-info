# pull official base image
FROM node:19-alpine3.16

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /home/ubuntu/workspace/bamzy-info/ui/reactive/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]

# docker build -t ui-react-app .
# docker run -it  --rm  -v ${PWD}:/app  -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true ui-react-app