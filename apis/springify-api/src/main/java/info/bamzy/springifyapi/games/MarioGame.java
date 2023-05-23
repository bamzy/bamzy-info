package info.bamzy.springifyapi.games;

import info.bamzy.springifyapi.utils.CustomLogger;
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
