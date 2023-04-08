# **What you need to know about elasticsearch**
## **how to setup up**

1) make sure docker config has vm.max_map_count=262144 by running
```shell
wsl -d docker-desktop -u root
sysctl -w vm.max_map_count=262144
```
2) setup a docker network (optional)
```shell
docker network create elastic-newrok
```
3) then run the elasticsearch container
```shell
docker run --name elasticsearch-server --net elastic-network -p 9200:9200 -p 9300:9300 -v d:\workspace\elasticdata:/usr/share/elasticsearch/data -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms1g -Xmx1g" elasticsearch:8.7.0
```

4) copy related info from the log and run the kiban container
```shell
docker run --name kibana-server --net elastic-network -p 5601:5601 docker.elastic.co/kibana/kibana:8.7.0
```


# **baseic concepts**