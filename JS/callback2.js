// callback2.js <->  main2.html

// callback2.js
// 콜백함수: 함수형 프로그래밍

const colors = ['red', 'green', 'blue', 'black', 'yellow'];

console.log('color : ', colors);

console.log('color dataType : ,', typeof colors);

console.log('color dataType : ', toString.call(colors));  //Array


colors.forEach((value, index) => {
    console.log('index : ', index);
    console.log('value : ', value);
    

});