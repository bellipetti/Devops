package collection;

import java.util.HashMap;
import java.util.Set;

public class HashMapExam2 {

    public static void main(String[] args) {
               HashMap<String, Contact> map = new HashMap<>();

        Contact contact1 = new Contact("java@gmail.com", "일길동", "011-1111-1111");
        Contact contact2 = new Contact("spring@gmail.com", "이길동", "011-2222-1111");
        Contact contact3 = new Contact("react@gmail.com", "삼길동", "011-3333-1111");
     
        
        map.put(contact1.getEmail(), contact1);        
        map.put(contact2.getEmail(), contact2);
        map.put(contact3.getEmail(), contact3);
   
        Set<String> keys = map.keySet(); {
            //Set(String key : map.keySet()) { 와 같은 코드
        for(String key : keys) {
            Contact value = map.get(key);
            System.out.print(value.getEmail() + ", ");
            System.out.print(value.getName() + ", ");
            System.out.print(value.getPhone());
        }



        }

    }


}
