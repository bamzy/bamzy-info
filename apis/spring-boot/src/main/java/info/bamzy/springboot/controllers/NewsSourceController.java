package info.bamzy.springboot.controllers;

import info.bamzy.springboot.configs.ServerConfig;
import info.bamzy.springboot.models.enditiy.NewsSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@RestController
public class NewsSourceController {
    private final double random;
    @Autowired
    private ServerConfig sc;
    private ArrayList<NewsSource> dataList = new ArrayList<>(Arrays.asList(
        new NewsSource("bbcpersian.com","BBC", UUID.randomUUID()),
                new NewsSource("iranintl.com","Iran International", UUID.randomUUID()),
                new NewsSource("manoto.com","manoto", UUID.randomUUID()),
                new NewsSource("t.me/vahidonline","vahidonline", UUID.randomUUID())
    ));

    public NewsSourceController() {
        random = Math.random();
    }

    @GetMapping("/newsSource/list")
    public List<NewsSource> retrieveAllNewsSources(){
        return dataList;
    }

    @GetMapping("/random")
    public double getRandom() {
        return random;
    }

    @GetMapping("/server-config")
    public ServerConfig getConfig() {
        return sc;
    }

    @PostMapping("newsSource/add")
    @ResponseBody
    public void addNewsSource(@RequestParam(name = "id", required = false) UUID uuid, @RequestParam String displayName, @RequestParam String url){
        NewsSource tmp = new NewsSource(url,displayName,(uuid!= null )?uuid:UUID.randomUUID());
        dataList.add(tmp);
    }

    @DeleteMapping("newsSource/delete")
    @ResponseBody
    public void delNewsSource(@RequestParam(name = "id") String uuidStr){
        NewsSource tmp = new NewsSource(null,null,UUID.fromString(uuidStr));
        dataList.remove(tmp);

    }

}