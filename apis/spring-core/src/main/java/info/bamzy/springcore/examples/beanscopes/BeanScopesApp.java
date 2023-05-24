package info.bamzy.springcore.examples.beanscopes;


import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

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
