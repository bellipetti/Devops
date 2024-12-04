package step001;
public class Break {
  public static void main(String[] args) {
         
      while(true) {
        int num = (int) (Math.random() * 45) +1;  // *45는 나오는 숫자 범위
        System.out.println(num);
        if(num == 45) {  //45가 나오면 프로그램 종료
          break;
        }

       


      }
      System.out.println ("프로그램 종료");
    
    }
  }
    