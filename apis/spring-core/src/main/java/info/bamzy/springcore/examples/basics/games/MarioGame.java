package info.bamzy.springcore.examples.basics.games;

import info.bamzy.springcore.utils.CustomLogger;
import org.springframework.stereotype.Component;

@Component
public class MarioGame implements VideoGame {

    @Override
    public String getName() {
        return "Mario Game";
    }

    public void up(){
        CustomLogger.logger.info("Jump");
    }
    public void left(){
        CustomLogger.logger.info("moving backward");
    }
    public void right(){
        CustomLogger.logger.info("moving forward");
    }
}
