## how to run on docker?
```shell
sudo docker run --name codestats-api-app  -v /home/ubuntu/workspace/bamzy-info/apis/codeanalysis:/usr/src/app -v /home/ubuntu/workspace/bamzy-info:/usr/src/codebase --network bamzy-network -d bamzy/codestats-api-app
```