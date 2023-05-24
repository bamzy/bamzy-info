package info.bamzy.springifyapi.examples.beanscopes;


import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
@ComponentScan
public class BeanScopesApp {


    public static void main(String[] args){
        var context =new AnnotationConfigApplicationContext(BeanScopesApp.class);

        System.out.println(context.getBean(PrototypeClass.class));
        System.out.println(context.getBean(PrototypeClass.class));

        System.out.println(context.getBean(NormalClass.class));
        System.out.println(context.getBean(NormalClass.class));




    }
}
