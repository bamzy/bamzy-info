#! /bin/bash

if [[ -z "$1" ]];
then
  echo "Please enter a website url"
  exit 1
else
  if [[ -z "$2" ]];
  then
    echo "Please enter your access token from bitly dashboard"
    exit 1
  else
        echo "Please Wait..."
        res =  curl --silent -X POST https://api-ssl.bitly.com/v4/shorten -H "Authorization: Bearer $2" -H "Content-type:application/json" -d '{"long_url": "$1"}' 2>&1 |  grep -oP '"link":"[^"]*'
        echo "res is $res";
    fi
fi
