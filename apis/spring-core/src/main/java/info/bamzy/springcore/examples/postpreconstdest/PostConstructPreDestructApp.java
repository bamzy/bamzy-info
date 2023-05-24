package info.bamzy.springcore.examples.postpreconstdest;


import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan
public class PostConstructPreDestructApp {


    public static void main(String[] args){
        try(
        var context =new AnnotationConfigApplicationContext(PostConstructPreDestructApp.class);

                ){

        }




    }
}
