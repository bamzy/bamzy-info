FROM nginx:latest

# Create app directory
WORKDIR /etc/nginx
RUN mkdir /etc/nginx/ssl
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY default.config /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY /home/ubuntu/ssl/ssl-bundle.crt /etc/nginx/ssl/
COPY /home/ubuntu/ssl/bamzy.info_key.txt /etc/nginx/ssl/
RUN nginx -t
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

EXPOSE 80 443