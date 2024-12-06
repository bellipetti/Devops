package generic;


// 제네릭 클래스
class Box<T extends Number> {  // Type Parameter

        private T item;

        public Box() {
        }

        public Box(T item) {
            this.item = item;
        }

       // setter method
        public void setItem(T item) {
            this.item = item;
        }

        // getter method
        public T getItem() {
            return this.item;
        }


}


public class GenericExam2err {

    // // Generic Method
    // public static <T extends Number> void printBox(Box<T> obj) {
    //     System.out.println(obj.getItem());

    
    // Generic Method
    public static void printBox {
        System.out.println(obj.getItem());

    // Generic Method : ? : Generic wild card
    public static void printBox(Box<? extends Number> obj) {
    
    


    public static void main(String[] args) {

        Box<Double> box1 = new Box<>(1.0);

        printBox(box1);

        Box<Integer> box2 = new Box<>(1);
      
        printBox(box2);
                    
                
                
                
                    
    }           
    }
            
            

    }
}