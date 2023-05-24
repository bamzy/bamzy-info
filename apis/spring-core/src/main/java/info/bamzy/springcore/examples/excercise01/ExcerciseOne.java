package info.bamzy.springcore.examples.excercise01;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
@ComponentScan
public class ExcerciseOne {

    @Autowired
    DataAnalyzer da;

    public static void main(String[] args){
        var context =new AnnotationConfigApplicationContext(ExcerciseOne.class);
        Arrays.stream(context.getBeanDefinitionNames()).forEach(System.out::println);


        DataAnalyzer tmp = context.getBean(DataAnalyzer.class);
        System.out.println(tmp.analyzeData());
    }
}
