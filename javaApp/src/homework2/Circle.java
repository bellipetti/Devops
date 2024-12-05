package homework2;

import java.util.Scanner;

public class Circle implements Shape {
    private double radius; // 반지름

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }

    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("원의 반지름을 입력하세요: ");
        double radius = scanner.nextDouble();
        
        Circle circle = new Circle(radius);
        System.out.println("원의 둘레: " + circle.getPerimeter());
        System.out.println("원의 면적: " + circle.getArea());
        
        scanner.close();
    }
}
