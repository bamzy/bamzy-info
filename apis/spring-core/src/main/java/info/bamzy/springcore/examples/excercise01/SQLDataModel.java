package info.bamzy.springcore.examples.excercise01;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class SQLDataModel implements CustomDataModel{
    @Override
    public int[] getData() {
        return new int[]{7,8,9,45,6,6,2};
    }
}
