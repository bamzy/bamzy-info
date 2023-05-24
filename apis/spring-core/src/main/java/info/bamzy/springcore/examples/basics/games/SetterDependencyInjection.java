package info.bamzy.springcore.examples.basics.games;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SetterDependencyInjection {

    DependencyOne dep1;
    DependencyTwo dep2;


    @Autowired
    public void setDep1(DependencyOne dep1) {
        this.dep1 = dep1;
    }

    @Autowired
    public void setDep2(DependencyTwo dep2) {
        this.dep2 = dep2;
    }

    @Override
    public String toString() {
        return "SetterDependencyInjection HasDependency{" + dep1 + " , " + dep2 +"}";
    }
}
