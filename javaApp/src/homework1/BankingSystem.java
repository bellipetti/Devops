package homework1;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class BankingSystem {
    private List<Account> accounts;

    public BankingSystem() {
        accounts = new ArrayList<>();
    }

    public void registerAccount(String accountNumber, String accountHolder) {
        accounts.add(new Account(accountNumber, accountHolder));
        System.out.println("계좌가 등록되었습니다.");
    }

    public void deposit(String accountNumber, double amount) {
        Account account = findAccount(accountNumber);
        if (account != null) {
            account.deposit(amount);
            System.out.println("입금 완료: ₩" + amount);
        } else {
            System.out.println("계좌를 찾을 수 없습니다.");
        }
    }

    public void withdraw(String accountNumber, double amount) {
        Account account = findAccount(accountNumber);
        if (account != null) {
            account.withdraw(amount);
            System.out.println("출금 완료: " + amount + "원");
        } else {
            System.out.println("계좌를 찾을 수 없습니다.");
        }
    }

    public void checkBalance(String accountNumber) {
        Account account = findAccount(accountNumber);
        if (account != null) {
            System.out.println("현재 잔액: " + account.getBalance() + "원");
        } else {
            System.out.println("계좌를 찾을 수 없습니다.");
        }
    }

    public void displayAccountDetails(String accountNumber) {
        Account account = findAccount(accountNumber);
        if (account != null) {
            account.displayDetails();
        } else {
            System.out.println("계좌를 찾을 수 없습니다.");
        }
    }

    public void modifyAccount(String accountNumber, String newAccountHolder) {
        Account account = findAccount(accountNumber);
        if (account != null) {
            account.setAccountHolder(newAccountHolder);
            System.out.println("계좌 정보가 수정되었습니다.");
        } else {
            System.out.println("계좌를 찾을 수 없습니다.");
        }
    }

    public void deleteAccount(String accountNumber) {
        Account account = findAccount(accountNumber);
        if (account != null) {
            accounts.remove(account);
            System.out.println("계좌가 삭제되었습니다.");
        } else {
            System.out.println("계좌를 찾을 수 없습니다.");
        }
    }

    public void displayAllAccounts() {
        if (accounts.isEmpty()) {
            System.out.println("등록된 계좌가 없습니다.");
        } else {
            for (Account account : accounts) {
                account.displayDetails();
                System.out.println("----------------------");
            }
        }
    }

    private Account findAccount(String accountNumber) {
        for (Account account : accounts) {
            if (account.getAccountNumber().equals(accountNumber)) {
                return account;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        BankingSystem bankingSystem = new BankingSystem();
        boolean exit = false;

        while (!exit) {
            System.out.println("\n은행 시스템 메뉴:");
            System.out.println("1. 계좌 등록");
            System.out.println("2. 입금");
            System.out.println("3. 출금");
            System.out.println("4. 잔액 조회");
            System.out.println("5. 계좌 상세조회");
            System.out.println("6. 계좌 정보 수정");
            System.out.println("7. 계좌 정보 삭제");
            System.out.println("8. 계좌 목록 조회");
            System.out.println("9. 종료");
            System.out.print("옵션 선택: ");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("계좌 번호 입력: ");
                    String accountNumber = scanner.next();
                    System.out.print("계좌 소유자 이름 입력: ");
                    String accountHolder = scanner.next();
                    bankingSystem.registerAccount(accountNumber, accountHolder);
                    break;
                case 2:
                    System.out.print("계좌 번호 입력: ");
                    accountNumber = scanner.next();
                    System.out.print("입금 금액 입력: ");
                    double depositAmount = scanner.nextDouble();
                    bankingSystem.deposit(accountNumber, depositAmount);
                    break;
                case 3:
                    System.out.print("계좌 번호 입력: ");
                    accountNumber = scanner.next();
                    System.out.print("출금 금액 입력: ");
                    double withdrawAmount = scanner.nextDouble();
                    bankingSystem.withdraw(accountNumber, withdrawAmount);
                    break;
                case 4:
                    System.out.print("계좌 번호 입력: ");
                    accountNumber = scanner.next();
                    bankingSystem.checkBalance(accountNumber);
                    break;
                case 5:
                    System.out.print("계좌 번호 입력: ");
                    accountNumber = scanner.next();
                    bankingSystem.displayAccountDetails(accountNumber);
                    break;
                case 6:
                    System.out.print("계좌 번호 입력: ");
                    accountNumber = scanner.next();
                    System.out.print("새로운 계좌 소유자 이름 입력: ");
                    String newAccountHolder = scanner.next();
                    bankingSystem.modifyAccount(accountNumber, newAccountHolder);
                    break;
                case 7:
                    System.out.print("삭제할 계좌 번호 입력: ");
                    accountNumber = scanner.next();
                    bankingSystem.deleteAccount(accountNumber);
                    break;
                case 8:
                    bankingSystem.displayAllAccounts();
                    break;
                case 9:
                    exit = true;
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
