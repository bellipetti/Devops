package com.example1.testapp.domain;

import org.springframework.stereotype.Component;

@Component("hi")
public class Hi {

    public String hi(String username) {
         return "Hell, " + username;
    }
}
