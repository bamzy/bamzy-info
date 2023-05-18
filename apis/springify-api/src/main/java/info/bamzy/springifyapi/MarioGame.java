package info.bamzy.springifyapi;

public class MarioGame implements VideoGame {

    public void up(){
        System.out.println("Jump");
    }
    public void left(){
        System.out.println("moving backward");
    }
    public void right(){
        System.out.println("moving forward");
    }
}
