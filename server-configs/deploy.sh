#!/bin/sh
cd /home/ubuntu/workspace/bamzy-info
git pull
cp /home/ubuntu/workspace/bamzy-info/ui/static/steller/public_html/*.html /home/ubuntu/nginx_html
cp /home/ubuntu/workspace/bamzy-info/ui/static/steller/public_html/assets /home/ubuntu/nginx_html -r
cp /home/ubuntu/workspace/bamzy-info/ui/build/* /home/ubuntu/nginx_html/iran/ -r
sudo docker restart chart-api-app