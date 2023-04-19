package info.bamzy.news.query.api;

import info.bamzy.news.core.configuration.AxonConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@SpringBootApplication
@Import({AxonConfig.class})
public class NewsQueryApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewsQueryApplication.class, args);
	}

}
