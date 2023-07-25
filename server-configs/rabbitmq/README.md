<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/RabbitMQ_logo.svg/1024px-RabbitMQ_logo.svg.png" width="200" height="auto" />

# **What you need to know about RabbitMQ**
## **How to setup up server:**


1) setup a docker network (optional)
```shell
docker network create rabbitmq-network
```
2) then run the rabbitmq-manager container
```shell
docker run -d --hostname rabbitmq-host1 --name rabbitmq-server --net rabbitmq-network -p 15672:15672 -e RABBITMQ_DEFAULT_USER=admin -e RABBITMQ_DEFAULT_PASS=[yourpassword] rabbitmq:3-management
```


## **Basic Concepts:**

