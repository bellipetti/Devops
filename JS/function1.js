
// function1.js

// 함수 선언문 : 함수 선언을 하면서 전달을 하는거
function sayHello(username) {
    
    return 'Hello, ' + username;
}


// 함수 호출

console.log(sayHello('kso'));


// 아래는 위의 코드를 함수표현식으로 변경

// 함수 표현식

const hello = function(username) { 
    return 'Hello, ' + username;
}

console.log(hello('lee'));  // Hello, lee

console.log('hello : ', hello);

console.log('hello dataType : ', typeof hello);



