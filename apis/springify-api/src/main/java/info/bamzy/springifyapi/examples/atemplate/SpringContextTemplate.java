package info.bamzy.springifyapi.examples.atemplate;


import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
@ComponentScan
public class SpringContextTemplate {


    public static void main(String[] args){
        var context =new AnnotationConfigApplicationContext(SpringContextTemplate.class);
        Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);



    }
}
