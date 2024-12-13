// es9.js <-> es6.html
// 스프레드 오퍼레이션 Spread Operator
// 배열복사, 배열병합


//배열복사
const intarr = [1, 2, 3];
const clone = [...intarr];
console.log(intarr === clone);  //false
console.log('intarr: ', intarr);
console.log('clone: ', clone);
clone[1] = 100;
console.log('intarr: ', intarr); // [1, 2, 3]
console.log('clone: ', clone); // [1, 100, 3]


//배열병합
const strarr = ['a', 'b', 'c'];
const result = [...intarr, ...strarr];
console.log('result: ', result);

const array = [5, 6, ...intarr, 7, 8]
console.log('array : ', array);

