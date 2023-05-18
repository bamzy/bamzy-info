package info.bamzy.springifyapi.games;

import info.bamzy.springifyapi.utils.CustomLogger;

public class NFSGame implements VideoGame {

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
}
