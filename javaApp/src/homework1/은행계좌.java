package homework1;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class 은행계좌 {
    private List<String> 거래내역;
    private double 잔액;

    public 은행계좌() {
        거래내역 = new ArrayList<>();
        잔액 = 0.0;
    }

    public void 입금(double 금액) {
        if (금액 > 0) {
            잔액 += 금액;
            거래내역.add("입금," + 금액);
            System.out.println("입금: " + 금액 + "원");
        } else {
            System.out.println("유효하지 않은 입금 금액");
        }
    }

    public void 출금(double 금액) {
        if (금액 > 0 && 금액 <= 잔액) {
            잔액 -= 금액;
            거래내역.add("출금," + 금액);
            System.out.println("출금: $" + 금액);
        } else {
            System.out.println("유효하지 않은 출금 금액 또는 잔액 부족");
        }
    }

    public void 잔액조회() {
        System.out.println("현재 잔액: $" + 잔액);
    }

    public void 거래내역출력() {
        System.out.println("거래 내역:");
        for (String 거래 : 거래내역) {
            System.out.println(거래);
        }
    }

    public void 거래내역CSV저장(String 파일명) {
        try (FileWriter fw = new FileWriter(파일명); PrintWriter pw = new PrintWriter(fw)) {
            pw.println("유형,금액");
            for (String 거래 : 거래내역) {
                pw.println(거래);
            }
            System.out.println(파일명 + "에 거래 내역 저장 완료");
        } catch (IOException e) {
            System.out.println("CSV 파일로 거래 내역 저장 중 오류 발생: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        은행계좌 계좌 = new 은행계좌();
        boolean 종료 = false;

        while (!종료) {
            System.out.println("\n은행 계좌 메뉴:");
            System.out.println("1. 입금");
            System.out.println("2. 출금");
            System.out.println("3. 잔액 조회");
            System.out.println("4. 거래 내역 출력");
            System.out.println("5. 거래 내역 CSV 저장");
            System.out.println("6. 종료");
            System.out.print("옵션 선택: ");
            int 선택 = scanner.nextInt();

            switch (선택) {
                case 1:
                    System.out.print("입금 금액 입력: ");
                    double 입금금액 = scanner.nextDouble();
                    계좌.입금(입금금액);
                    break;
                case 2:
                    System.out.print("출금 금액 입력: ");
                    double 출금금액 = scanner.nextDouble();
                    계좌.출금(출금금액);
                    break;
                case 3:
                    계좌.잔액조회();
                    break;
                case 4:
                    계좌.거래내역출력();
                    break;
                case 5:
                    System.out.print("CSV로 저장할 파일명 입력: ");
                    scanner.nextLine(); // 줄바꿈 문자를 소비합니다.
                    String 파일명 = scanner.nextLine();
                    계좌.거래내역CSV저장(파일명);
                    break;
                case 6:
                    종료 = true;
                    System.out.println("종료합니다...");
                    break;
                default:
                    System.out.println("유효하지 않은 옵션입니다. 다시 시도해 주세요.");
                    break;
            }
        }

        scanner.close();
    }
}
