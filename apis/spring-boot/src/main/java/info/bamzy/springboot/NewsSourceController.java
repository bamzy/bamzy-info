package info.bamzy.springboot;

import info.bamzy.springboot.models.NewsSource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@RestController
public class NewsSourceController {

    @RequestMapping("/newsSources")
    public List<NewsSource> retrieveAllNewsSources(){
        return Arrays.asList(
                new NewsSource("bbc.com","BBC", UUID.randomUUID()),
                new NewsSource("iranintl.com","Iran International", UUID.randomUUID())
        );
    }
}
