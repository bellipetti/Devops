public class Snippet {
    public static void main(String[] args) {
        int i = 0;
        int sum = 0;
        while (i < 10) {
            i++;
            if (i % 2 == 1)
                continue;
            sum += i;
            System.out.println("i= "+ i);
            System.out.println("sum= " + sum);
        }
        System.out.println("최종 sum= "+ sum);
    }
}