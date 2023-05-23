package info.bamzy.springifyapi.games;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ConstructorDependencyInjection {

    DependencyOne dep1;
    DependencyTwo dep2;

    public ConstructorDependencyInjection(DependencyOne dep1, DependencyTwo dep2) {
        this.dep1 = dep1;
        this.dep2 = dep2;
    }


    @Override
    public String toString() {
        return "ConstructorDependencyInjection HasDependency{" + dep1 + " , " + dep2 +"}";
    }
}
