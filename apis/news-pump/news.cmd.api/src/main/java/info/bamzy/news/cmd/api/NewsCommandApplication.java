package info.bamzy.news.cmd.api;

import info.bamzy.news.core.configuration.AxonConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

@Import({AxonConfig.class})
@SpringBootApplication
public class NewsCommandApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewsCommandApplication.class, args);
	}

}
