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

4) copy related info from the log and run the kibana container
```shell
docker run --name kibana-server --net elastic-network -p 5601:5601 docker.elastic.co/kibana/kibana:8.7.0
```


# **basic concepts**

images below are extracted from [this](https://www.udemy.com/course/elasticsearch-complete-guide/) fantastic udemy course by Bo Anderson 


<img src="./snapshots/1.png" width="300" height="auto" />
<img src="./snapshots/2.png" width="300" height="auto" />

* use cases
  * Query data/document
  * Aggregate Data
  * Application Performance Management (APM): analyze app logs and system metrics
  * Forecast future values with machine learning
  * Anomaly Detection

* indexes are the equivalent of tables in relational database
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


* if you have multi-node elastic, each node will contain some of data. all nodes with related data constitute a cluster. Cross cluster data retrieval is not common
* In a single-node config, your node is still part of a cluster. All nodes are part of a cluster 

* this is how your JSON data is stored as a "document" in a node:
<img src="./snapshots/6.png" width="500" height="auto" />

* every "document" is part of an index
* documents within an index have similar structures
* there is no limit on the size of index as long as it is below 2billion!! in each shard


*  **Sharding**
* elasticsearch shards the data when there are more than one node in the cluster
* sharding is happening at the index level no cluster level
* distribute queries to be faster
* more data can be stored because of 2billion limit
* you can split index into shards or shrink shards of an index which will result in creating a new index


*  **Replication**
*  replication happens at the index level
*  replication creates exact full copies of each shard
*  a shard that has been replicated is called the primary shard
*  a primary shard + all its replicas === replication group
*  replica shards are never stored on the same node
*  replication can only happen when you have more than one node

* **Snapshots**
* snapshots are good as daily backups or for moving data or disaster reversion 
  
<img src="./snapshots/7.png" width="500" height="auto" />


* **Type of nodes (one node can be more than one)**
* Master (m): a node responsible for creating or deleting indexes, but more than one node can have this responsibility while only one of them can BE the master
* master can be elected by voting or specified explicitly in the case of large clusters
* In big clusters, master node should pref not be a data to remain more available for its core tasks
* Data (d): stored data
* Ingest (i): runs ingest pipelines which is the process needed to be done on document before being added to an index. eg. apache access log files go through ingest so IP transformed to lat and long coordinates.
* Machine Learning: runs ML code
* Coordination Node:
* Voting Node: 
## useful commands to use in Kibana's Console
```shell
#this returns cluster name and status and version 
#in this example _cluster is the API and 'health' is the command
GET _cluster/health
{
  "query": {
    "match_all": {}
  }
}
# get node status
GET _cat/nodes?v

#get list of user indexes + system indexes and their size
GET _cat/indices

#create a new index
PUT /posts

#delete an index
DELETE /posts
``` 

## useful CURL commands
```shell
# it will ask you for your password once you hit enter
curl --insecure -XGET -u bamzy-info-elastic https://kibana.bamzy.info


#this is a working curl query to retrieve all from kibana_sample_data_logs index
>curl --insecure -XGET -u bamzy-info-elastic -H "Content-type:application/json" https://kibana.bamzy.info/kibana_sample_data_logs/_search -d "{ \"query\": { \"match_all\": { } } }" 
```