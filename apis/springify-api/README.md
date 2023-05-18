# A refresher on Spring & Spring Boot

## Terminology:
**Coupling** <i>Is the measure of how much code change in involved when changing the behavior.  </i><br>

**Tight Coupling:** <i>this is when you don't use frameworks or code into interfaces</i><br>
**Loose Coupling:** <i>code to interface</i><br>
**Dependency Injection:** <br>
**Inversion of Control:** <br>
**Auto Wiring:** <br>
**Spring Container aka Spring Context aka Spring IOC Container :** <i>Manages Spring Beans and their lifecycle and there are two types: Bean Factory and Application Context</i><br>
**Spring Bean:** <i>I would describe bean as info including primitive data and object </i><br>
**Java Bean:** used in sth called EJB where a java class needs to meet 3 criteria

1)public no-arg constructor 

2)you should have getters/setters

3)implements serializable<br>

**POJO:** any java object is a plain-old-java-object <br>
**Component Scan:** <br>
**Application Context:** <br>



1) How to define beans:
```java
@Configuration
class SthConfig{
    @Bean 
    public String somename(){return "Bamdad";}

    @Bean (name="Greet")
    public String sayhello(String somename){
        return "Hi " + somename; 
    }
}

```
```java
public class App {
    public static void main() {
        var context = AnnotationConfigApplicationContext(SthConfig.class);
        context.getBean("somename");
        context.getBean("Greet");
    }
}
```

2) how to get the list of all beans
```java

public class App {
    public static void main() {
        var context = AnnotationConfigApplicationContext(SthConfig.class);
        String[] names = context.getBeanDefinitionNames();
    }
}
```

3) putting @primary before a @Bean sets that one as defualt in case there are multiple matching beans

```java
import org.springframework.context.annotation.Primary;

@Configuration
class SthConfig {

    @Bean
    public Game getFirstGame(int id) {
        return new Game("NFS");
    }

    @Bean
    @Primary
    public Game getSecondGame(int id) {
        return new Game("CS Go");
    }
}
```
```java
public class App {
    public static void main(){
        var context = AnnotationConfigApplicationContext(SthConfig.class);
        context.getBean(Game.class); //will get CS Go
    }
}
```

4) you can also have @Qualifier when there are multiple bean option based on your selection

```java
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;

@Configuration
class SthConfig {

    @Bean
    @Primary
    public Game getFirstGame(int id) {
        return new Game("NFS");
    }

    @Bean
    @Qualifier("secondQualifier")
    public Game getSecondGame(int id) {
        return new Game("CS Go");
    }

    @Bean
    @Bean
    public boolean compareGames(GameInfo a,@Qualifier("secondQualifier") GameInfo b){
        System.out.println("comparing a: "+ a.name() + " and b: "+ b.name()); //a is the primary (default) and b is the secondary 
        return a.price()>b.price();
    }
}
```
```java
public class App {
    public static void main(){
        var context = AnnotationConfigApplicationContext(SthConfig.class);
        context.getBean(Game.class); //will get CS Go
    }
}
```