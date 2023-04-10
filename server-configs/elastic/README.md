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
docker run --name elasticsearch-server --net elastic-network -p 9200:9200 -p 9300:9300 -v d:\workspace\elastic\data:/usr/share/elasticsearch/data -v d:\workspace\elastic\config:/usr/share/elasticsearch/config -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms2g -Xmx2g"  -e "xpack.security.enabled=false" elasticsearch:8.7.0


docker run --name elasticsearch-server --net elastic-network -p 9200:9200 -it -e "xpack.security.enabled=false" -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:8.7.0
```

4) copy related info from the log and run the kiban container
```shell
docker run --name kibana-server --net elastic-network -p 5601:5601 docker.elastic.co/kibana/kibana:8.7.0
```


# **basic concepts**
<img src="./snapshots/1.png" width="300" height="auto" />
<img src="./snapshots/2.png" width="300" height="auto" />

* use cases
  * Query data/document
  * Aggregate Data
  * Application Performance Management (APM): analyze app logs and system metrics
  * Forecast future values with machine learning
  * Anomaly Detection


* data is stored as documents ~~ row in relation database
* a document then contains fields ~~ column in table
* documents are stored as json in elasticsearch
* elasticsearch is written in java 
* its de-centralized by nature and easy to scale


* Elastic Stack:
  *   Elasticsearch,
  *   Kibana: UI, visualization dashboard
  *   Logstash: streams application logs to elasticsearch
  *   X-Pack: adds features such as security, OAuth, LDAP, monitoring CPU and RAM, setup Alerts, gen reports, export csv, PDF, allow ML, allows using SQL in elastic
  *   Beats: this is a collection of agents (data shippers) that send logs and status to Logstash and are installed on monitored servers, FileBeat, MetricBeat, PacketBeat, WinLogBeat

* ELK Stack (from olden times): Elasticsearch, LogStash, Kibana
<img src="./snapshots/3.png" width="500" height="auto" />
<img src="./snapshots/4.png" width="500" height="auto" />
<img src="./snapshots/5.png" width="500" height="auto" />
