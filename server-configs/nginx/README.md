
Run on docker 
```bash
sudo docker run -d --name nginx-server -p 80:80 -p 443:443 -v /home/ubuntu/nginx_html:/usr/share/nginx/html -v /home/ubuntu/nginx_reactive:/usr/share/nginx/reactive nginx:latest
```
