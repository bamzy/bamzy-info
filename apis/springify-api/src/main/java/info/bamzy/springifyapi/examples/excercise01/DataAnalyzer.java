package info.bamzy.springifyapi.examples.excercise01;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;
@Component
public class DataAnalyzer {
    CustomDataModel dm;

    @Autowired
    public DataAnalyzer(CustomDataModel dm) {
        this.dm = dm;
    }
    public int analyzeData(){
        return Arrays.stream(dm.getData()).summaryStatistics().getMax();
    }

}
