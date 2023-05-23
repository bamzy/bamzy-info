package info.bamzy.springifyapi.examples.basics.games;

import info.bamzy.springifyapi.utils.CustomLogger;
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
