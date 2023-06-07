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
* <i><b>[Update: March 8, 2023]</b></i>  There is a new and independent react-app under the [/dashboard](https://bamzy.info/dashboard) path with some exciting charts
  * its an independent react-app which is behind a reverse proxy and ties to the same chartAPI that the static site uses
* <i><b>[Update: March 27, 2023]</b></i>  Jenkins server was introduced to build the final artifact for the react-app using this [jenkinsfile](https://github.com/bamzy/bamzy-info/blob/main/Jenkinsfile)
    * Jenkins runs an npm docker to build the app<br>
    * it uploads the artifact to S3 bucket<br>
    * deploy.sh picks it up and puts it on the server<br>
    * s3 lifecycle rule clean up artifacts that are older than 30  days (plugins [S3 Publisher](https://plugins.jenkins.io/s3), [AWS Steps](https://plugins.jenkins.io/pipeline-aws) )
<p float="left">
  <img src="https://bamzy.info/assets/imgs/Screenshot7.png" width="300" height="300px" /> 
  <img src="https://bamzy.info/assets/imgs/Screenshot8.png" width="300" height="300px"/>
</p>

* <i><b>[Update: March 29, 2023]</b></i>
  * Moved jenkins Controller into a public subdomain [http://jenkins.bamzy.info](http://jenkins.bamzy.info/) for more flexibility
  * separated Jenkins Agent to another micro server on oracle cloud to perform bandwidth-rich operation
  * spin up a local Jenkins agent to do computation heavy operation such as ```npm run build``` for react apps that runs into heap overflow on machines even with 1GB of memory 

* <i><b>[Update: April 2, 2023]</b></i>
  * Setup jenkins job to run unit tests written in Mocha & Jest, [codestats](https://github.com/bamzy/bamzy-info/blob/main/apis/codeanalysis/Jenkinsfile), [chart](https://github.com/bamzy/bamzy-info/blob/main/apis/chart/Jenkinsfile)
    
* <i><b>[Update: April 3, 2023]</b></i>
  * Connect GitHub webhooks to run jenkins unit test upon git push with some cool colors!

* <i><b>[Update: April 5, 2023]</b></i>
    * moved the bamzy.info doman behind Cloudflare and configured cloudflare rules to use my own SSL for main and ignore SSL for jenkins.bamzy.info subdomain

* <i><b>[Update: April 10, 2023]</b></i>
  * Introduced [OpenSearch](https://kibana.bamzy.info/_dashboards/app/home#/) into the infrastructure to monitor the system and allow future text search on the coming features
  * Added opensearchAPI & elasticAPI to handle CRUD in both variations 

* <i><b>[Update: April 12, 2023]</b></i>
  * Brought [jenkins](https://jenkins.bamzy.info) behind cloudflare instead of nginx reverse proxy
  * 


## Paid Services Used
1) GoDaddy: .info Domain : 7.04/y CAD
2) GoDaddy: Admin Email for SSL verification: 9.03 CAD 
3) SSLs: single SSL certificate: 3.09/y CAD
4) AWS: Elastic IP: 12/m CAD


## All Endpoints

1. [https://infra.bamzy.info/deploy](https://infra.bamzy.info/deploy): Deploy Code webhook
2. [https://elastic.bamzy.info/_dashboard](https://elatic.bamzy.info/_dashboard) : OpenSearch UI
3. [https://elastic.bamzy.info/](https://elastic.bamzy.info/) : Elastic API Endpoint
4. [https://jenkins.bamzy.info/](https://jenkins.bamzy.info/) : Our Jenkins CD/CI

## useful links: 
[AWS Free Tier Spec](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all)



![One of my designs](/server-configs/system-designs/twitter.drawio.svg)