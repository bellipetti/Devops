package collection;

import java.util.ArrayList;

public class ArrayListExam1 {
    public static void main(String[] args) {
        
        ArrayList<String> names = new ArrayList<>();

        names.add("kim");
        names.add("lee");
        names.add("hong");
        names.add("park");
        names.add("moon");
        
        // names.add("1");  <- 이건 Error

        // for(String name : names) {
        //     System.out.println(name);
        // }
        names.stream().forEach(System.out::println);  // 함수형 코드, 요즘 많이 쓰는 코딩 기법
        
        System.out.println(names.size());  // 5

        System.out.println(names.isEmpty());  // false
    }
}
