package info.bamzy.springifyapi;

public class GameRunner {
    VideoGame mariogame;
    public GameRunner(VideoGame mg) {
        this.mariogame = mg;
    }

    public void run() {
        System.out.println("Gamerunner is running");

        mariogame.left();
        mariogame.right();
        mariogame.up();
    }
}
