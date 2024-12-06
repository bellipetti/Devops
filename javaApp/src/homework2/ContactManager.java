package homework2;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class ContactManager {

    private static final String FILE_NAME = "contacts.txt";
    private Map<String, String> contacts = new HashMap<>();

    public static void main(String[] args) throws IOException {
        ContactManager manager = new ContactManager();
        manager.loadContacts(); // 프로그램 시작 시 파일에서 연락처 로드
        manager.run();
    }

    private void run() throws IOException {
        BufferedReader reader = new BufferedReader(new java.io.InputStreamReader(System.in));
        while (true) {
            System.out.println("1. 연락처 등록");
            System.out.println("2. 연락처 검색");
            System.out.println("3. 연락처 삭제");
            System.out.println("4. 연락처 목록조회");
            System.out.println("5. 연락처 수정");
            System.out.println("6. 종료");
            System.out.print("선택: ");
            
            String choice = reader.readLine();
            switch (choice) {
                case "1":
                    addContact(reader);
                    break;
                case "2":
                    searchContact(reader);
                    break;
                case "3":
                    deleteContact(reader);
                    break;
                case "4":
                    listContacts();
                    break;
                case "5":
                    updateContact(reader);
                    break;
                case "6":
                    saveContacts(); // 프로그램 종료 시 파일에 연락처 저장
                    System.out.println("프로그램을 종료합니다.");
                    return;
                default:
                    System.out.println("유효하지 않은 선택입니다. 다시 시도해주세요.");
            }
        }
    }

    private void loadContacts() throws IOException {
        File file = new File(FILE_NAME);
        if (!file.exists()) {
            file.createNewFile();
        }
        
        BufferedReader fileReader = new BufferedReader(new FileReader(file));
        String line;
        while ((line = fileReader.readLine()) != null) {
            String[] parts = line.split(",");
            if (parts.length == 2) {
                contacts.put(parts[0], parts[1]);
            }
        }
        fileReader.close();
    }

    private void saveContacts() throws IOException {
        BufferedWriter fileWriter = new BufferedWriter(new FileWriter(FILE_NAME));
        for (Map.Entry<String, String> entry : contacts.entrySet()) {
            fileWriter.write(entry.getKey() + "," + entry.getValue());
            fileWriter.newLine();
        }
        fileWriter.close();
    }

    private void addContact(BufferedReader reader) throws IOException {
        System.out.print("이름: ");
        String name = reader.readLine();
        System.out.print("전화번호: ");
        String phone = reader.readLine();
        contacts.put(name, phone);
        System.out.println("연락처가 등록되었습니다.");
    }

    private void searchContact(BufferedReader reader) throws IOException {
        System.out.print("이름: ");
        String name = reader.readLine();
        String phone = contacts.get(name);
        if (phone != null) {
            System.out.println("전화번호: " + phone);
        } else {
            System.out.println("연락처를 찾을 수 없습니다.");
        }
    }

    private void deleteContact(BufferedReader reader) throws IOException {
        System.out.print("이름: ");
        String name = reader.readLine();
        if (contacts.remove(name) != null) {
            System.out.println("연락처가 삭제되었습니다.");
        } else {
            System.out.println("연락처를 찾을 수 없습니다.");
        }
    }

    private void listContacts() {
        System.out.println("연락처 목록:");
        for (Map.Entry<String, String> entry : contacts.entrySet()) {
            System.out.println("이름: " + entry.getKey() + ", 전화번호: " + entry.getValue());
        }
    }

    private void updateContact(BufferedReader reader) throws IOException {
        System.out.print("수정할 연락처의 이름: ");
        String name = reader.readLine();
        if (contacts.containsKey(name)) {
            System.out.print("새 전화번호: ");
            String newPhone = reader.readLine();
            contacts.put(name, newPhone);
            System.out.println("연락처가 수정되었습니다.");
        } else {
            System.out.println("연락처를 찾을 수 없습니다.");
        }
    }
}
