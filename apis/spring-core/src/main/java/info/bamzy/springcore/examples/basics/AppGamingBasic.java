package info.bamzy.springcore.examples.basics;

import info.bamzy.springcore.examples.basics.games.ConstructorDependencyInjection;
import info.bamzy.springcore.examples.basics.games.GameRunner;
import info.bamzy.springcore.examples.basics.games.FieldDependencyInjection;
import info.bamzy.springcore.examples.basics.games.SetterDependencyInjection;
import info.bamzy.springcore.utils.CustomLogger;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Arrays;

public class AppGamingBasic {
    public static void main(String[] args){
        // create spring context using the configuration
        var context =new AnnotationConfigApplicationContext(AppGamingBasicConfiguration.class);
        CustomLogger.logger.info("\n\n--------------all beans--------------\n");
        Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);
        CustomLogger.logger.info("\n\n--------------end of all beans--------------\n\n");

        CustomLogger.logger.info("My test");
        CustomLogger.logger.info(context.getBean("getName"));
        CustomLogger.logger.info(context.getBean("bettername"));
        CustomLogger.logger.info(context.getBean("minAge"));
        CustomLogger.logger.info(context.getBean("game"));
        CustomLogger.logger.info(context.getBean(GameInfo.class));
        CustomLogger.logger.info(context.getBean("gameNew"));
        CustomLogger.logger.info(context.getBean("compareGames"));

        ((GameRunner)context.getBean(GameRunner.class)).run();



//        CustomLogger.logger.info(hasDependency.test);
        CustomLogger.logger.info("\n\n--------------Dependency Injection--------------\n");
        CustomLogger.logger.info(context.getBean(FieldDependencyInjection.class));
        CustomLogger.logger.info(context.getBean(SetterDependencyInjection.class));
        CustomLogger.logger.info(context.getBean(ConstructorDependencyInjection.class));
        CustomLogger.logger.info("\n\n--------------End Dependency Injection--------------\n");

    }
}
