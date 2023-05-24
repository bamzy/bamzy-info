package info.bamzy.springcore.examples.basics.games;

import info.bamzy.springcore.utils.CustomLogger;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class GameRunner {
    VideoGame currentGame;
    Logger logger;
    public GameRunner(VideoGame mg) {
        this.currentGame = mg;

    }

    public void run() {

        CustomLogger.logger.info("GameRunner is running the "+ currentGame.getName()+ "...");
        currentGame.left();
        currentGame.right();
        currentGame.up();
    }
}
