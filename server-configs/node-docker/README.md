# This is how to build docker images for nodejs app
1. update the `Dockerfile`
2. take a look at the `.dockerignore` file
3. run this to create an image `docker build . -t bamzy/node-app-name`
4. run this to run the container: `sudo docker run --name codestats-api-app -p 5001:5001 -v /home/ubuntu/workspace/bamzy-info/apis/codeanalysis:/usr/src/app --network bamzy-network -d bamzy/codestats-api-app`