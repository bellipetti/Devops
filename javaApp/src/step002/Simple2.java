package step002;

public class Simple2 {
        public static void main(String[] args) {
           String m[] = {"BANANA", "APPLE", "KIWI", "ORANGE", "MANGO", "MELON"};

           boolean isSwap ;
           do {           
                isSwap = false;
                for(int i = 0; i < m.length-1; i++) {
                    String tmp = m[i];
                    m[i] = m[i+1];
                    m[i+1] = tmp;
                    isSwap=true;
                }
            }
            while(isSwap);



        for(String str : m) {
       
            System.out.println(str);
        }
    }

}
            

