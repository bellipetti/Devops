// AppConfig.java
package com.example1.testapp.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example1.testapp.domain.Hello;
import com.example1.testapp.domain.NotificationService;
import com.example1.testapp.domain.SmsSender;

@Configuration
public class AppConfig {

    // @Bean(name="hello")
    // public Hello hello() {
    //     return new Hello();
    // }

    @Bean(name = "sms")
    public SmsSender sender() {
        return new SmsSender();
    }

    @Bean(name = "notification")
    public NotificationService notificationService(SmsSender smsSender) {
        return new NotificationService(smsSender);
    }
}
