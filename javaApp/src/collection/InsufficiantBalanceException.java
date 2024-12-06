package collection;

// 잔고가 부족한 경우 예외
// UnChecked Exception  ,  언체크익셉션
public class InsufficiantBalanceException extends RuntimeException {

    public InsufficiantBalanceException() {
        super("잔고가 부족합니다.");

    }

}
