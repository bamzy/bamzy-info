package info.bamzy.springifyapi;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


record GameInfo (String name, double price,int age){}
@Configuration
public class AppGamingBasicConfiguration {
    @Bean
    public String getName(){
        return "Bamdad";
    }

    @Bean(name = "bettername")
    public String somebadname(){
        return "booooo";
    }

    @Bean (name= "minAge")
    public int age(){
        return 15;
    }

    @Bean
    public GameInfo game(){
        return new GameInfo("Forza Horizon",Math.random()*100,age());
    }

    @Bean
    public GameInfo gameNew(int minAge){
        return new GameInfo("Forza Horizon",Math.random()*100,minAge);
    }





}
