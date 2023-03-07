FROM nginx:latest

# Create app directory
#WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY default.config /etc/nginx/config.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

RUN nginx -t
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 80 443
CMD [ "node", "chartAPI.js" ]