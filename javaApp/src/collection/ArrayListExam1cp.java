package collection;

import java.util.ArrayList;

public class ArrayListExam1cp {
    public static void main(String[] args) {
        
        ArrayList<String> names = new ArrayList<>();

        names.add("kim");
        names.add("lee");
        names.add("hong");
        names.add("park");
        names.add("moon");
        // names.add("1");  <- 이건 Error

        for(String name : names) {
            System.out.println(name);
        }

    }
}
