public class Star {
    public static void main(String[] args) {
        for (int row = 0; row < 9; row++) {
            if(row < 5) {
                for (int column = 0; column <= row; column++) {
                    System.out.print("*");
                }
                
            } else {
                for (int column = 0; column <= 8-row; column++) {
                   System.out.print("*");
                }
            }
            System.out.println();
        }
    }
}
