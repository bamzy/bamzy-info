FROM nginx:latest

# Create app directory
WORKDIR /etc/nginx
RUN mkdir /etc/nginx/ssl
RUN mkdir /usr/share/nginx/reactive
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY default.config /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY ssl-bundle.crt /etc/nginx/ssl/ssl-bundle.crt
COPY bamzy.info_key.txt /etc/nginx/ssl/bamzy.info_key.txt
RUN nginx -t
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source

EXPOSE 80 443