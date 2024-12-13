// es3.js <-> es.html
//Arrow Function 화살표함수
 
// //문법1
// const hello = (username) => {  //hello는 함수이름
//     console.log('hello: ', username)
    
// }
// hello('kim');
    

// //문법2
// const hello = (username) => console.log('hello', username)
// hello('kim');


// //문법3
// const hello = username => console.log('Hello, ', username);
// hello('kim');



// //함수리터럴을 통해서 함수생성 문법
// const sayHello = (username) => {  
//     return 'hello, ' + username;
    
// }
// console.log(sayHello('kim'));


//한줄일 경우 리턴문을 생략 할 수 있다  (중괄호가 있으면 생략할 수 없다)
// const sayHello = username => 'hello, ' + username;
// console.log(sayHello('kim'));


/*Q. 두수의 합계를 구해서 리턴하는 add
add: 
화살표 함수
구현
함수호출
*/
const sayHello = username => 'hello, ' + username;
const add = (a, b) => {
    return a + b;
}
console.log(add(1,2));

// const add1 = (a, b) => a + b;  //한줄 표현 방식 테스트해보아야함
