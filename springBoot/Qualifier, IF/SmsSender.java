// SmsSender.java
package com.example1.testapp.domain;

public class SmsSender implements Sender {
    public void sendText(String username, String message) {
        
        System.out.println("SMS " + username + ":" + message);
    }
}
