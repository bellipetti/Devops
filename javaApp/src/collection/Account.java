package collection;
public class Account {
    //field
    private String accountNumber;
    private String name;
    private String pwd;
    private int balance;



    // 디폴트 생성자 (Default Consructor Method)
    public Account() {
        
    
    }
    
    // 생성자 메소드 (Consructor Method)
    public Account(String accountNumber, String name, String pwd, int balance) {
        this.accountNumber = accountNumber;
        this.name = name;
        this.pwd = pwd;
        this.balance = balance;
    }

    // instance method
    public int getBalance() {
        return this.balance;
    }

    // 입금하다   <- 여기서 this를 안넣으면 입금금액이 변경이 안됨!! 주의!!
    public void deposit(int balance) {
        this.balance += balance;
        //this.balance = this.balance + balance;
    }

     // 출금하다   <- 
     public void withdraw(int balance) throws InsufficiantBalanceException {
        if (balance > this.balance) {
            throw new InsufficiantBalanceException();

        }
        this.balance -= balance;
        //this.balance = this.balance - balance;
     }
    
    // // 계좌이체하다
    public void transferAccount(Account account, int balance) throws InsufficiantBalanceException {
        this.withdraw(balance);
        account.deposit(balance);
    }


    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String printAccount() {
        return String.format("계좌번호: %s, 이름: %s, 비밀번호: %s, 잔고: %d\n",
            this.accountNumber, this.name, this.pwd, this.balance);
    }

    @Override
    public String toString() {
        return String.format("계좌번호: %s, 이름: %s, 비밀번호: %s, 잔고: %d\n",
            this.accountNumber, this.name, this.pwd, this.balance);
    }

    @Override
    public boolean equals(Object obj) {
       Account account = (Account)obj;
       if(this.accountNumber.equals(account.accountNumber)) {
            return true;
       }
       return false;
    } 

    
    

 }

    

    








