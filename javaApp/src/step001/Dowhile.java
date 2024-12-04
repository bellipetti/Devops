package step001;
public class Dowhile {
  public static void main(String[] args) {
         
      int i = 10;
      while (i<3) {  // 조건식 거짓이기 때문에 아무것도 출력 되지 않음 (while)
        System.out.println("현재 숫자는: " +i);
        i++;
      }

      int l = 11;
      do {   // 최초 한번 코드 블럭 실행 후 조건식 거짓이기때문에 종료 (do while)
        System.out.println("현재 숫자는: " +l);
        l++;
      } while (l<3);
      
      }
    }
  
    