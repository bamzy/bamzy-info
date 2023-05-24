package info.bamzy.springifyapi.examples.postpreconstdest;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.stereotype.Component;

@Component
public class ClassWithPostConstructAndPreDestruct {
    SomeDependency sd;
    public ClassWithPostConstructAndPreDestruct(SomeDependency someDependency) {
        super();
        sd = someDependency;
        System.out.println("1.constructor for post construct");
    }
    @PostConstruct
    public void moreSetup(){
        sd.someLogic();
        System.out.println("2.there is more to do");
    }
    @PostConstruct
    public void evenMoreSetup(){
        System.out.println("3.even moooore");

    }

    @PreDestroy
    public void cleanUp(){
        System.out.println("4.cleaning up before dying");
    }

}
