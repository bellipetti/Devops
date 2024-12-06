package exception;

public class AccountExam1 {    // transferAccount 트랜스퍼어카운터를 이용해서 계좌이체를 하고 싶을 때 사용한 기술
    public static void main(String[] args) {
        
                   // 계좌 객체 생성  (한개의 고객계좌가 생성이 됬다고 생각하면 된다)
        Account account1 = new Account("1111", "일길동", "aaaa", 10000);

                   // 계좌 객체 생성  (한개의 고객계좌가 생성이 됬다고 생각하면 된다)
        Account account2 = new Account("2222", "일길동", "aaaa", 10000);

        System.out.printf("1111 잔고: %d%n ", account1.getBalance());
        System.out.printf("2222 잔고: %d%n ", account2.getBalance());

        // 1111 고객 계좌에서 2222 고객 계좌로 5000원을 계좌이체하다.
        try {
            account1.transferAccount(account2, 5000);
        } catch (InsufficiantBalanceException ex) {
            System.out.println(ex.getMessage());
        }
        System.out.printf("1111 잔고: %d%n ", account1.getBalance());
        System.out.printf("2222 잔고: %d%n ", account2.getBalance());


    }
}
