
//hoisting3.js








// 함수 표현식
const hello = function(username) { 
    return 'Hello, ' + username;
}

console.log(hello('lee'));





// arrow function (화살표함수)

const sayHello = (username) => {
    return 'Hello, ' + username;
}

console.log(sayHello('lee'));  // Hello, lee