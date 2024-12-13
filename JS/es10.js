// es10.js <-> es6.html
// Object || Array Destructuring (배열 구조 분해 할당)

const colors =['red' , 'green' , 'blue'];
const [x, y, z] = colors;
console.log(`x: ${x}. y: ${y}, z: ${z}`); //x: red. y: green, z: blue


const [x2, y2] = colors;
console.log(`x: ${x2} y: ${y2}`); //x: red y: green


const [y3] = colors;
console.log(`y: ${y3}`);  //y: red
/////////////////////////////////////////////////////////////////////////



//함수호출
const myFun = () => {
    return [1, 2]  // array를 통해서 반환
}
const [a, b] = myFun(); // [1, 2] 값을 반환하는
console.log(`a: ${a}, b: ${b}`);



