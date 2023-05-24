# Spring Boot Basics 

## Chapter One: What is Spring Boot

spring boot is just a wrapper around spring and spring MVC
1) Mark your controller class with @RestController and your API methods with @RequestMapping like so:

```java
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class NewsController {
    @RequestMapping("/getAllNewsSrouce")
    public List<NewsSource> getAllNewsSource(){
        ...
    }
}
```

2) Spring boot was built to make coding <b>Faster</b> and <b>Production Ready</b>

2.1) Faster via:
- Spring Initializr
- Spring Boot Starter
- Spring Boot Autoconfig
- Spring Boot DevTools (brings auto-rebuild)

2.2) Production Ready via:
- Logging
- Profiling (diff env config): create application-xxx.properties files and in the main application.properties set 
```java
spring.profile.active=xxx
``` 
- Monitoring

3) log levels from most to least:
 - trace
 - debug
 - info
 - warning
 - error
 - off

4) read config values from application.properties
first, put your values in the file with this format: my-unique-prefix.keyname
```java
my-server-config.apikey=somevalue
```
then annotate a component class with @ConfigurationProperties(prefix=my-unique-prefix) and fields with same name as keyname

```java

@ConfigurationProperties(prefix = "my-unique-prefix")
@Component
public class ServerConfig {
    private String keyname;

    public String getKeyname() {
        return keyname;
    }

    public void setKeyname(String keyname) {
        this.keyname = keyname;
    }
}

```

5) How to deploy apps:

5.1) WAR approach (old approach): install java, install webserver (tomcat,jetty,undertow), deploy .war file 

5.2) embedded approach (better approach): install java + jar file that contains tomcat as well. 
```shell
mvn clean install
java -jar xxxxx-0.0.1-SNAPSHOT.jar
```

<img src="src/main/resources/static/screenshots/01.png" width="400" height="auto">


6) monitoring metrics using Spring Boot Actuator

to get it include artifactId: spring-boot-actuator and navigate to http://yoururl/actuator 


## Chapter Two: JPA & Hibernate