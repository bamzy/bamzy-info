4. run this to run the container: 
```shell
sudo docker run -d --name redis-api-app -p 6379:6379 --network bamzy-network redis/redis-stack-server:latest
```