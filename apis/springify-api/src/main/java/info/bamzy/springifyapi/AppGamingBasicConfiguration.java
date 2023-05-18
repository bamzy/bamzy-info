package info.bamzy.springifyapi;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;


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
    @Qualifier("secondQualifier")
    public GameInfo game(){
        return new GameInfo("Forza Horizon4",Math.random()*100,age());
    }

    @Bean
    @Primary
    public GameInfo gameNew(int minAge){
        return new GameInfo("Forza Horizon5",Math.random()*100,minAge);
    }


    @Bean
    public boolean compareGames(GameInfo a,@Qualifier("secondQualifier") GameInfo b){
        System.out.println("comparing a: "+ a.name() + " and b: "+ b.name());
        return a.price()>b.price();
    }
    @Bean (name="mario")
    public MarioGame getMario(){
        return new MarioGame();
    }


}
