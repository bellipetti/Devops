package step001;
public class S5050 {
    public static void main(String[] args) {
        int sum = 0;

        int i = 5;  // 여기 5 라고 해도 아래 1로 먹음
        for(i=1; i<=100; i++) {
            sum += i;

            System.out.println("1~" + (i-1) + " 합 : " + sum);
        }
    }
}
