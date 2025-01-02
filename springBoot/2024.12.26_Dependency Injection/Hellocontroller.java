// Hellocontroller.java
package com.example.testapp.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController

public class Hellocontroller {
    @GetMapping("/hello")
    public String sayHello() {
        return "hello, Springboot!!";

    }


}
