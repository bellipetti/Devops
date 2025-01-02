// TestappApplication.java
package com.example.testapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.testapp.domain.Hello;
import com.example.testapp.domain.Hi;
import com.example.testapp.domain.NotificationService;
import com.example.testapp.domain.SmsSender;

@SpringBootApplication
public class TestappApplication {

	public static void main(String[] args) {
		// Spring container  (모든 빈의 생성을 관리하는 컨테이너)
		ConfigurableApplicationContext context = SpringApplication.run(TestappApplication.class, args);
		
		// Hello hello = context.getBean("hello", Hello.class);

		// System.out.println(hello.sayHello());

		// 컴포넌트 스캔이라는 에노테이션을 스캐닝해서 빈으로 등록하는 예제
		// Hi hi = context.getBean("hi", Hi.class);
		// System.out.println(hi.hi("kim"));

		
		// 노티피케이션서비스라는 빈을 가져와보기
		NotificationService notification = context.getBean("notification", NotificationService.class);
		// SmsSender smsSender = context.getBean("smsSender", SmsSender.class);
		// notification.setSmsSender(smsSender);
		notification.notify("kim", "Hello");
	}

}
