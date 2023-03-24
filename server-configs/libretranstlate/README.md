
Run on docker 
```bash
sudo docker run -d --name=translate-api-app --restart=always --network bamzy-network --env LT_DEBUG=true --env LT_LOAD_ONLY=fa,en -v /home/ubuntu/workspace/libretranslate/data:/home/libretranslate/.local/share -v /home/ubuntu/workspace/libretranslate/cache:/home/libretranslate/.local/cache libretranslate/libretranslate
```
Note: DEFAULT port is 5000

you can access the translator api using bamzy.info/api/translator/translate