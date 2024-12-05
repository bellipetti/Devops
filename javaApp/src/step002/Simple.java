package step002;

public class Simple {
        public static void main(String[] args) {
            char fruitsp[][] = {{'B','A','N','A','N','A'},
                                {'a','P','P','L','E'},
                                {'K','I','W','I'},
                                {'O','R','A','N','G','E'},
                                {'M','A','N','G','E'},
                                {'M','A','N','G','O'},
                                {'M','E','L','O','N'}};

            boolean isSwap;
            do
            {
                isSwap = false;
                for(int i=0; i < fruitsp.length-1; i++)
                {
                    for(int j=0; j<fruitsp[i].length; j++)
                    {
                        if(fruitsp[i][j] < fruitsp[i+1][j]) break;
                        if(fruitsp[i][j] == fruitsp[i+1][j]) continue;

                        char[] tmp = fruitsp[i+1];
                        fruitsp[i+1] = fruitsp[i];
                        fruitsp[i] = tmp;
                        isSwap = true;
                        break;
                    }
                
                }
        }while(isSwap);
    }   

}