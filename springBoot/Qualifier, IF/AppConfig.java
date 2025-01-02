// AppConfig.java
package com.example1.testapp.config;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.example1.testapp.domain.AppPushSender;
import com.example1.testapp.domain.Hello;
import com.example1.testapp.domain.NotificationService;
import com.example1.testapp.domain.Sender;
import com.example1.testapp.domain.SmsSender;

@Configuration
public class AppConfig {

    // @Bean(name="hello")
    // public Hello hello() {
    //     return new Hello();
    // }

    // @Primary
    @Bean(name = "sms")
    public SmsSender sender1() {
        return new SmsSender();
    }

    @Bean(name = "appPush")
    public AppPushSender sender2() {
        return new AppPushSender();
    }

    @Bean(name = "notification")
    public NotificationService notificationService(@Qualifier(value = "appPush") Sender sender) { // DI
        return new NotificationService(sender);
    }
}
