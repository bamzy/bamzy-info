package info.bamzy.springifyapi;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


record GameInfo (String name, double price){}
@Configuration
public class AppGamingBasicConfiguration {
    @Bean
    public String getName(){
        return "Bamdad";
    }

    @Bean
    public int age(){
        return 15;
    }

    @Bean
    public GameInfo game(){
        return new GameInfo("Forza Horizon",23.3);
    }
}
