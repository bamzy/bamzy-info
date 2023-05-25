package info.bamzy.springboot.data;

import info.bamzy.springboot.models.enditiy.NewsSource;
import info.bamzy.springboot.models.jdbc.NewsSourceJDBCRepo;
import info.bamzy.springboot.models.jpa.NewsSourceJPARepo;
import info.bamzy.springboot.models.springjpa.NewsSourceSpringJPARepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
public class NewsSourceCommandLineRunner implements CommandLineRunner {
    @Autowired
    NewsSourceJDBCRepo newsSourceJDBCRepo;

    @Autowired
    NewsSourceJPARepo newsSourceJPARepo;


    @Autowired
    NewsSourceSpringJPARepo newsSourceSpringJPARepo;


    @Override
    public void run(String... args) throws Exception {
        UUID uuid1 = UUID.randomUUID();
        newsSourceJDBCRepo.insert(new NewsSource("google.com","google", uuid1));
        UUID uuid2 = UUID.randomUUID();
        newsSourceJDBCRepo.insert(new NewsSource("yahoo.com","yahoo finance", uuid2));

        newsSourceJDBCRepo.delete(uuid1); //remove google
        System.out.println(newsSourceJDBCRepo.findById(uuid2));

        UUID uuid3 = UUID.randomUUID();
        UUID uuid4 = UUID.randomUUID();
        newsSourceJPARepo.insert(new NewsSource("bamzy.info","bamdad news", uuid3));
        newsSourceJPARepo.insert(new NewsSource("sharghnews.com","shargh news", uuid4));
        System.out.println(newsSourceJPARepo.findById(uuid4));

        newsSourceJPARepo.delete(uuid3);

        newsSourceSpringJPARepo.save(new NewsSource("farsnews.com","Fars news", UUID.randomUUID()));
        System.out.println(newsSourceSpringJPARepo.findAll());

        System.out.println(newsSourceJPARepo.findAll());
    }
}
