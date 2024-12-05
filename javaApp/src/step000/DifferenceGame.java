package step000.Games;
import java.util.Random;
import java.util.Scanner;

public class DifferenceGame {
    private static final int SIZE = 9;
    private static char[][] image1;
    private static char[][] image2;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        while (true) {
            generateImages(random);
            System.out.println("틀린그림찾기 게임에 오신 것을 환영합니다!");
            System.out.println("두 그림에서 다른 위치를 찾아보세요.");
            printImages();

            boolean found = false;
            while (!found) {
                System.out.print("행 번호(0-9)를 입력하세요: ");
                int row = scanner.nextInt();
                System.out.print("열 번호(0-9)를 입력하세요: ");
                int col = scanner.nextInt();

                if (image1[row][col] != image2[row][col]) {
                    System.out.println("정답입니다! (" + row + ", " + col + ") 위치가 다릅니다.");
                    found = true;
                } else {
                    System.out.println("다시 시도해보세요.");
                }
            }

            System.out.print("또 다른 문제를 풀겠습니까? (yes_1/no_2): ");
            String answer = scanner.next();
            if (!answer.equalsIgnoreCase("1")) {
                break;
            }
        }
        scanner.close();
    }

    private static void generateImages(Random random) {
        image1 = new char[SIZE][SIZE];
        image2 = new char[SIZE][SIZE];

        for (int i = 0; i < SIZE; i++) {
            for (int j = 0; j < SIZE; j++) {
                image1[i][j] = random.nextBoolean() ? '*' : ' ';
                image2[i][j] = image1[i][j];
            }
        }

        // Introduce a random difference
        int diffRow = random.nextInt(SIZE);
        int diffCol = random.nextInt(SIZE);
        image2[diffRow][diffCol] = (image2[diffRow][diffCol] == '*') ? ' ' : '*';
    }

    private static void printImages() {
        System.out.println("그림 1:");
        for (char[] row : image1) {
            for (char col : row) {
                System.out.print(col + " ");
            }
            System.out.println();
        }

        System.out.println("\n그림 2:");
        for (char[] row : image2) {
            for (char col : row) {
                System.out.print(col + " ");
            }
            System.out.println();
        }
    }
}
