// falsy.js  <->  index1.html
// falsy.js

// falsy와 truthy






// [폴리시한 값으로 평가 되는 예시]

//예시 1
// let temp = undefined;  //  undefined 값은 false 이다 
 
// if (temp) {  // falsy 값
//     console.log('true');
// } else {
//     console.log(false);
// }


//예시 2
// let temp = null;  //  undefined 값은 false 이다 
 
// if (temp) {  // falsy 값
//     console.log('true');
// } else {
//     console.log(false);
// }


//예시 3
// let temp = 0;  //  undefined 값은 false 이다 
 
// if (temp) {  // falsy 값
//     console.log('true');
// } else {
//     console.log(false);
// }


//예시 4
let temp = NaN;  //  undefined 값은 false 이다 
 
if (temp) {  // falsy 값
    console.log('true');
} else {
    console.log(false);
}
// 위 외에는 대부분 트루시한 값으로 관리가 된다




// [트루시한 값으로 평가 되는 예시]


//예시 1
// let temp1 = true;

// if (temp1) {  // falsy 값
//     console.log('true');
// } else {
//     console.log(false);
// }


//예시 2
// let temp1 = 1;

// if (temp1) {  // falsy 값
//     console.log('true');
// } else {
//     console.log(false);
// }


//예시 3
let temp1 = 'abc';

if (temp1) {  // falsy 값
    console.log('true');
} else {
    console.log(false);
}
