package info.bamzy.springcore.examples.jakartadepenInj;


import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
public class JakartaDependencyInjectionApp {


    public static void main(String[] args){
        try(var context =new AnnotationConfigApplicationContext(JakartaDependencyInjectionApp.class);){
            context.getBean(ClassWithSomeDependency.class).doLogic();

        }




    }
}
