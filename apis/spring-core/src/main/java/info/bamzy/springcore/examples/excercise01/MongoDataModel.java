package info.bamzy.springcore.examples.excercise01;

import org.springframework.stereotype.Component;

@Component

public class MongoDataModel implements CustomDataModel{
    @Override
    public int[] getData() {
        return new int[]{1,2,3,4,5};
    }
}
