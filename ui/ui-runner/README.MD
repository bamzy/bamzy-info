```shell
sudo docker build . -t bamzy/react-runner-app
```
```shell
sudo docker run --name react-runner-app -p 3000:3000 -v /home/ubuntu/workspace/bamzy-info/ui/ui-runner:/usr/src/app --network bamzy-network -d bamzy/react-runner-app
```