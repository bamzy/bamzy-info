package info.bamzy.springifyapi;

import info.bamzy.springifyapi.games.GameRunner;
import info.bamzy.springifyapi.utils.CustomLogger;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Arrays;

public class AppGamingBasic {
    public static void main(String[] args){
        // create spring context using the configuration
        var context =new AnnotationConfigApplicationContext(AppGamingBasicConfiguration.class);
        CustomLogger.logger.info("all beans");
        Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);

        CustomLogger.logger.info("My test");
        CustomLogger.logger.info(context.getBean("getName"));
        CustomLogger.logger.info(context.getBean("bettername"));
        CustomLogger.logger.info(context.getBean("minAge"));
        CustomLogger.logger.info(context.getBean("game"));
        CustomLogger.logger.info(context.getBean(GameInfo.class));
        CustomLogger.logger.info(context.getBean("gameNew"));
        CustomLogger.logger.info(context.getBean("compareGames"));

        ((GameRunner)context.getBean("runner")).run();

    }
}
