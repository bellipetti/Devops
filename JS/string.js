// string.js <-> string.html

//내장객체 - String


//2024.12.11
//소문자를 대문자로 변경해보기
const temp = 'Hello';
console.log('upper case : ', temp.toUpperCase());
console.log('lower case : ', temp.toLowerCase());


//***붙여서 마킹하는작업할때 사용할 수 있는 기술   (결과: *****Hello)
console.log(temp.padStart(10, '*'));
console.log(temp.padEnd(10, '*'));


//문자열 앞뒤의 공백 제거 기술  (H ello 라고 할때 사이공백은 안됨) 
const temp1 = ' Hello   ';
console.log(temp1.trim());
console.log(temp1.trim().length);




