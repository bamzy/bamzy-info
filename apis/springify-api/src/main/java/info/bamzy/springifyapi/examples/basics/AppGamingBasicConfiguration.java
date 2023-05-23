package info.bamzy.springifyapi.examples.basics;

import info.bamzy.springifyapi.examples.basics.games.*;
import info.bamzy.springifyapi.utils.CustomLogger;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;


record GameInfo (String name, double price,int age){}
@Configuration
@ComponentScan("info.bamzy.springifyapi.examples.basics.games")


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
    public boolean compareGames( GameInfo a, @Qualifier("secondQualifier") GameInfo b){
        CustomLogger.logger.info("comparing a: "+ a.name() + " and b: "+ b.name());
        return a.price()>b.price();
    }
//    @Bean (name="mario")
//    @Primary
//    public VideoGame getMario(){
//        return new MarioGame();
//    }
//
//    @Bean (name="nfs")
//    public VideoGame getNFS(){
//        return new NFSGame();
//    }

//    @Bean
//    public GameRunner runner(VideoGame vg){
//        return new GameRunner(vg);
//    }


}
