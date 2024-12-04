package step001;
public class ForFloat {
    public static void main(String[] args) {
        for(float x=0.1f; x<=1.0f; x+=0.1f) {  /*float는 0.1보다 조금 크게 상승되서 
                                               0.1~1.0 까지 실행되는게 아닌  0.1~0.9 까지 9번만 실행된다*/
        System.out.println(x);
        }
    }
  }       