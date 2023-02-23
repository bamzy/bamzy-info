# bamzy.info 
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