## Docker containers are not in the same network out of the box so you need to set it up ##
<br>```docker network create [network-name]```<br>
and then connect existing containers like this<br>
```docker network connect [network-name] [container-name]```<br>
all the containers in the same network can see each other by their container name<br>
you can even run a fresh container already in a network from the beginning like this: <br>
``docker run -d xxxx -v yyyy --network [network-name] --name [container-name] -d [image-name]``