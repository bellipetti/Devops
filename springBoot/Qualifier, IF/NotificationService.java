// NotificationService.java
package com.example1.testapp.domain;

public class NotificationService {

    private final Sender sender;

    // public NotificationService(SmsSender smsSender) {   //문제있어서 다시 생성
    //     this.smsSender = smsSender;
    // }

    public NotificationService(Sender sender) {
        this.sender = sender;
    }
    public void notify(String username, String message) {
        sender.sendText(username, message);
    }

}
