// this1.js <->  object.html

//디스바인딩 ThisBinding
function hello(username) {
    console.log('this : ', this);
    console.log('Hello,', username);
    
}
hello('lee');


const sayHello = function(username) {
    console.log('this : ', this);   // Window 객체
    console.log('Hi,', username);
}
sayHello('hong');



//Arrow Function
const hi = (username) => {
    console.log('this : ', this); //Window 객체
}
hi('park');



//콜백함수 
function myFunc(username, func) {   //func: 콜백함수
    console.log('this : ', this);
    
    func(username);
}
myFunc('Alice', sayHello);

a
