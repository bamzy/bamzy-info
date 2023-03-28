# Bamzy.info 
<p float="left">
  <img src="https://bamzy.info/assets/imgs/Screenshot2.png" width="300" height="300px" /> 
  <img src="https://bamzy.info/assets/imgs/Screenshot1.png" width="300" height="300px"/>
</p>
<p float="left">
  <img src="https://bamzy.info/assets/imgs/Screenshot3.png" width="300" height="300px"/>
  <img src="https://bamzy.info/assets/imgs/Screenshot4.png" width="300" height="300px"/> 
</p>
<p float="left">
  <img src="https://bamzy.info/assets/imgs/Screenshot5.png" width="300" height="300px"/>
  <img src="https://bamzy.info/assets/imgs/Screenshot6.png" width="300" height="300px"/>
</p>

This is the code to my personal website. feel free to re-use at your own risk. its going to grow over time,
currently these are the noticeable features:<br>
    Internal APIs + charts for scraping news websites.<br>
    List of worthy educational materials<br>
    Here is the architecture design doc:  [Miro](https://miro.com/app/board/uXjVPv7Tk-A=/?share_link_id=997983610765) 
* <i><b>[Update: Feb 10, 2023]</b></i> there is a webhook handler that authenticates github requests and in my case deploys the new code 
* it has an experimental jwt auth API system
* <i><b>[Update: Feb 20, 2023]</b></i>  it has a text scraper that compares the RSS feed of prominent Iranian news sites and draws word clouds based on most frequent words used
* <i><b>[Update: Feb 22, 2023]</b></i>  used nginx config to unify separate API servers (running in separate docker containers) without exposing the internal networking structure
  * as a result we have paths like this <b>bamzy.info/api/chart?name=xxxx</b>
* <i><b>[Update: March 8, 2023]</b></i>  There is a new and independent react-app under the [/iran](https://bamzy.info/iran) path with some exciting charts
  * its an independent react-app which is behind a reverse proxy and ties to the same chartAPI that the static site uses
* <i><b>[Update: March 27, 2023]</b></i>  Jenkins server was introduced to build the final artifact for the react-app
     * Jenkins runs an npm docker to build the app
     * it uploads the artifact to S3 bucket
     * deploy.sh picks it up and puts it on the server