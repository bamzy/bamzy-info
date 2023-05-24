package info.bamzy.springcore.examples.basics.games;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FieldDependencyInjection {

    @Autowired
    DependencyOne dep1;
    @Autowired
    DependencyTwo dep2;


    @Override
    public String toString() {
        return "FieldDependencyInjection HasDependency{" + dep1 + " , " + dep2 +"}";
    }
}
