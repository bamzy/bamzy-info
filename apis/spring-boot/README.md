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

2) Spring boot was built to make coding <b>Faster</b> and <b>Production Ready</b>

2.1) Faster via:
- Spring Initializr
- Spring Boot Starter
- Spring Boot Autoconfig
- Spring Boot DevTools (brings auto-rebuild)

2.2) Production Ready via:
- Logging
- Profiling
- Monitoring