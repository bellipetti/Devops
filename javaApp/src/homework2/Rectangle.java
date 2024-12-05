package homework2;
import java.util.Scanner;

public class Rectangle implements Shape {
    private double width;  // 가로 길이
    private double height; // 세로 길이

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    public double getPerimeter() {
        return 2 * (width + height);
    }

    @Override
    public double getArea() {
        return width * height;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("사각형의 가로 길이를 입력하세요: ");
        double width = scanner.nextDouble();
        System.out.print("사각형의 세로 길이를 입력하세요: ");
        double height = scanner.nextDouble();
        
        Rectangle rectangle = new Rectangle(width, height);
        System.out.println("사각형 둘레: " + rectangle.getPerimeter());
        System.out.println("사각형 면적: " + rectangle.getArea());
        
        scanner.close();
    }
}
