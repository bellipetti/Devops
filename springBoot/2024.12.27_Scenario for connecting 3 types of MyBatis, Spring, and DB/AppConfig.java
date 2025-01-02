// AppConfig.java
package com.example1.testapp.config;

// @Configuration
// public class AppConfig {

//     // @Bean(name="hello")
//     // public Hello hello() {
//     //     return new Hello();
//     // }

//     // @Primary
//     @Bean(name = "sms")
//     public SmsSender sender1() {
//         return new SmsSender();
//     }

//     @Bean(name = "appPush")
//     public AppPushSender sender2() {
//         return new AppPushSender();
//     }

//     @Bean(name = "notification")
//     public NotificationService notificationService(@Qualifier(value = "appPush") Sender sender) { // DI
//         return new NotificationService(sender);
//     }
// }
