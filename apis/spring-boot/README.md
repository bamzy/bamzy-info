# Spring Boot Basics 
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