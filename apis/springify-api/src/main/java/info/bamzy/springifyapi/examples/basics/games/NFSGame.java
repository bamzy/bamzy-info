package info.bamzy.springifyapi.examples.basics.games;

import info.bamzy.springifyapi.utils.CustomLogger;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class NFSGame implements VideoGame,RPGGame {

    @Override
    public String getName() {
        return "Need for Speed";
    }

    public void up(){
        CustomLogger.logger.info("accelerate");
    }
    public void left(){
        CustomLogger.logger.info("turn left");
    }
    public void right(){
        CustomLogger.logger.info("turn right ");
    }

    @Override
    public void kill() {
        CustomLogger.logger.info("hit a wall");
    }
}
