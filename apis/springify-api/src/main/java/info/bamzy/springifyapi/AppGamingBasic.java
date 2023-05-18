package info.bamzy.springifyapi;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.util.Arrays;

public class AppGamingBasic {
    public static void main(String[] args){
        // create spring context using the configuration
        var context =new AnnotationConfigApplicationContext(AppGamingBasicConfiguration.class);
        System.out.println("all beans");
        Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);

        System.out.println("My test");
        System.out.println(context.getBean("getName"));
        System.out.println(context.getBean("bettername"));
        System.out.println(context.getBean("minAge"));
        System.out.println(context.getBean("game"));
        System.out.println(context.getBean(GameInfo.class));
        System.out.println(context.getBean("gameNew"));
        System.out.println(context.getBean("compareGames"));

    }
}
