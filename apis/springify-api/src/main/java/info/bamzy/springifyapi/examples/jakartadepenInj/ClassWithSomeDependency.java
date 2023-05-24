package info.bamzy.springifyapi.examples.jakartadepenInj;

import jakarta.inject.Inject;
import jakarta.inject.Named;

@Named
public class ClassWithSomeDependency {
    SomeDependency sd;

    public SomeDependency getSd() {
        return sd;
    }
    @Inject
    public void setSd(SomeDependency sd) {
        this.sd = sd;
    }

    public void doLogic() {
        this.sd.someLogic();
    }
}
