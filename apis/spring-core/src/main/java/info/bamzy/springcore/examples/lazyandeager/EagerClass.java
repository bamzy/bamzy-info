package info.bamzy.springcore.examples.lazyandeager;

import org.springframework.stereotype.Component;

@Component
public class EagerClass {
    public EagerClass() {
        System.out.println("EagerClass constructor");
    }
}
