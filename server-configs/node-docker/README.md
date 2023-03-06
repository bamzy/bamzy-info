# This is how to build docker images for nodejs app
1. update the `Dockerfile`
2. take a look at the `.dockerignore` file
3. run this to create an image `docker build . -t bamzy/node-app-name`
4. run this to run the container: `docker run -p 49160:8080 -d bamzy/node-app-name`