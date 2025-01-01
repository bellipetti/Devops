public class Soojebi {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5 };
        int[] temp = { 1, 2, 4, 6, 8 };
        int idx = 0;
        boolean flag;

        for (int i = 0; i < arr.length; i++) {
            flag = false;
            if (arr[i] == temp[i]) {
                flag = true;
            }
            if (flag) {
                temp[idx++] = arr[i];
                System.out.print(temp[idx]);
            }
        }
    }
}
