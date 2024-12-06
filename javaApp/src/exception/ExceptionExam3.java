package exception;

    
public class ExceptionExam3 {   //언체크드인셉션이 발생한걸 예외처리로 프로그램이 동작하게 함

    public static void main(String[] args) {
        String str = null;
        try {     
        System.out.println(str.length());

        } catch (Exception e) {
            System.out.println("Null 입니다");
        }

        System.out.println("Exit!!");


        }
    }

