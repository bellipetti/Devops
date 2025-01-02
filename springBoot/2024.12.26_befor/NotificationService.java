// NotificationService.java
package com.example1.testapp.domain;

public class NotificationService {

    private final SmsSender smsSender;

    // public NotificationService(SmsSender smsSender) {   //문제있어서 다시 생성
    //     this.smsSender = smsSender;
    // }

    public NotificationService(SmsSender smsSender) {
 
        this.smsSender = smsSender;
    }
    public void notify(String username, String message) {
        smsSender.senMessage(username, message);
    }

}
