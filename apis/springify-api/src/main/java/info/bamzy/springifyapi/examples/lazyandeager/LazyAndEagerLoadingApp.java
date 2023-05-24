package info.bamzy.springifyapi.examples.lazyandeager;


import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
@ComponentScan
public class LazyAndEagerLoadingApp {
    public static void main(String[] args){
        var context =new AnnotationConfigApplicationContext(LazyAndEagerLoadingApp.class);
        Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);
        context.getBean(LazyClass.class);
    }
}
