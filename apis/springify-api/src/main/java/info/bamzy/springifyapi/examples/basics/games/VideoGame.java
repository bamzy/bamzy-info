package info.bamzy.springifyapi.examples.basics.games;

public interface VideoGame {
    int i = 3;
    public String getName();
    public void up();
    public void left();
    public void right();

    default void sayHi(){
        System.out.println("hi");
    }

}
