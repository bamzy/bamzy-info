package info.bamzy.springifyapi.examples.jakartadepenInj;

import jakarta.inject.Named;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Named
@Scope(value = ConfigurableBeanFactory.SCOPE_PROTOTYPE)
public class SomeDependency {
    public void someLogic(){
        System.out.println("logic from dependency");
    }
}
