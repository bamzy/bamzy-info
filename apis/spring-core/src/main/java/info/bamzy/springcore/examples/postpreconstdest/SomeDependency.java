package info.bamzy.springcore.examples.postpreconstdest;

import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class SomeDependency {
    public void someLogic(){
        System.out.println("logic from dependency");
    }
}
