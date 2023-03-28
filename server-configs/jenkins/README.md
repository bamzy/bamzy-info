# How to Build Your Own Jenkins in a DinD way!!! 

1. Create a bridge network in Docker

```bash
docker network create jenkins
```


2.make two folders: <b>jenkins-docker-certs</b> and <b>jenkins-data</b> and run dind docker in the above nework
```bash
docker run --name jenkins-docker 
--rm --detach 
--privileged --network jenkins 
--network-alias docker 
--env DOCKER_TLS_CERTDIR=/certs 
--volume jenkins-docker-certs:/certs/client 
--volume jenkins-data:/var/jenkins_home 
--publish 2376:2376
docker:dind
```


3. Create Dockerfile with the following content:
```bash
FROM jenkins/jenkins:2.387.1
USER root
RUN apt-get update && apt-get install -y lsb-release
RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \
https://download.docker.com/linux/debian/gpg
RUN echo "deb [arch=$(dpkg --print-architecture) \
signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \
https://download.docker.com/linux/debian \
$(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list
RUN apt-get update && apt-get install -y docker-ce-cli
USER jenkins
RUN jenkins-plugin-cli --plugins "blueocean docker-workflow"
```

4. build this cusrom docker image
```bash
docker build -t bamzy-jenkins:2.387.1 .
```


5. Run your own custom jekins
```bash
docker run --name bamzy-jenkins-server --restart=on-failure --detach
--network jenkins --env DOCKER_HOST=tcp://docker:2376
--env DOCKER_CERT_PATH=/certs/client --env DOCKER_TLS_VERIFY=1
--volume jenkins-data:/var/jenkins_home
--volume jenkins-docker-certs:/certs/client:ro
--publish 8080:8080 --publish 50000:50000 bamzy-jenkins:2.387.1
```
