// string1.js <-> string.html

//내장객체 - String

let str = 'Hello, ';

console.log(`str : ${str}`);  

console.log(`str datatype : ${typeof str}`);

console.log(`str datatype : ${toString.call(str)}`);  //[object String]

console.log(`str 문자열의 길이 : ${str.length}`);

let result = str.concat('JavaScript');  //문자열결합

// Hello, Javascript
console.log(`result : ${result}`);

//글자위치 출력
console.log(result.indexOf('J'));  // 7 ->문자열을 찾고 왼쪽부터 세어간다

console.log(result.lastIndexOf('J'));  // 7 ->오른쪽부터 문자열을 찾고 왼쪽부터 세어간다


//글자수만큼 출력
console.log(result.slice(0, 5));      //방법1

console.log(result.substring(0, 5));  //방법2



//음수표현못함 출력
console.log(result.substring(-1, 5));
console.log(result.slice(-10));
console.log(result.slice(-6));
console.log(result.slice(-4));   //끝에서부터 뒤로


// 스플릿, 문자를 배열로 관리한다
const date = '2024-12-10';

const array = date.split('-');

console.log(`year : ${array[0]}년`);
console.log(`month : ${array[1]}월`);
console.log(`data : ${array[2]}일`);

