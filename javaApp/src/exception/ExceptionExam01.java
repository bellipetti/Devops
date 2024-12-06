package exception;

import java.io.FileNotFoundException;
import java.io.FileReader;     //체크드인셉션

public class ExceptionExam01 {

    public static void main(String[] args) {
        FileReader fr = null;
    try {
        
       
        // String fileName = "C:\\io\\hello.txt"; , "C:/io/hello.txt"; 둘중에 한가지 방식으로 선택 가능
        String fileName = "C:/a/hello.txt";
            fr = new FileReader(fileName);
    } catch (FileNotFoundException ex) {
        ex.printStackTrace();
        System.out.println("file not exist!!");
    } finally {
        try {
            fr.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        
    }

    System.out.println("Exit!!");
        }
    }


