package info.bamzy.springifyapi;

public class NFSGame implements VideoGame {

    public void up(){
        System.out.println("accelerate");
    }
    public void left(){
        System.out.println("turn left");
    }
    public void right(){
        System.out.println("turn right ");
    }
}
