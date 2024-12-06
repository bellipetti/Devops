package generic;


// 제네릭 클래스
class Box<T extends Number> {  // Type Parameter

        private T item;

        public Box() {
        }

        public Box(T item) {
            this.item = item;
        }

       
        public void setItem(T item) {
            this.item = item;
        }

        public T getItem() {
            return this.item;
        }


}


public class GenericExam1 {




    public static void main(String[] args) {

        // 객체 생성
        // Box<String> box1 = new Box<>("Apple");
      
        // System.out.println(box1.getItem());

        Box<Integer> box2 = new Box<>(10);

        System.out.println(box2.getItem());

        
    }
}
