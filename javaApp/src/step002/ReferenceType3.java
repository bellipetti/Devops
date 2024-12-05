package step002;

class ReferenceType3 {
    // instance field
    int year;
    int month;
    int day;

    
    public static void main(String[] args) {

        ReferenceType3 m[] = new ReferenceType3[100];


        for(int i = 0; i < m.length; i++) {
                m[i] = new ReferenceType3();
                m[i].year = 2000;
                m[i].month = 1; 
                m[i].day = i;      
        }

        for(int i = 0; i < m.length; i++) {
           System.out.println(m[i].year + "-" + m[i].month + "-" +  m[i].day);   
        }

    
    }
}
