// array1.js <->  array.html

//배열 리터럴을 이용하여 배열생성
const colors = ['red', 'green', 'blue', 'purple', 'gray'];
console.log('colors : ', colors);
console.log('colors datatype : ', typeof colors);
console.log('colors datatype : ', toString.call(colors));

//배열 길이구하기
console.log('length : ', colors.length);

// // 배열 출력방법1 [과거스타일] 인덱스로 접근 방법
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);  
// }

// 배열 출력방법2  [요즘스타일]
for (const e of colors) {   //e는 엘리먼트 약자
    console.log(e);  
}

//조인사용
console.log(colors.join('-')); //결과: red-green-blue-purple-gray


//배열의 마지막 요소를 제거
colors.pop();
console.log(colors.join()); //결과: red,green,blue,purple

//배열의 첫번째 요소를 제거
colors.shift();
console.log(colors.join()); //결과: green,blue,purple

//배열의 맨뒤에 요소를 추가
colors.push('yellow');
console.log(colors.join()); //결과: green,blue,purple,yellow

//배열의 맨앞에 요소를 추가
colors.unshift('pink');
console.log(colors.join()); //결과: pink,green,blue,purple,yellow

//배열의 내용을 오름차순정렬
console.log(colors.sort().join()); //결과: blue,green,pink,purple,yellow

//배열의 내용을 내림차순정렬
console.log(colors.sort().reverse().join()); //결과: yellow,purple,pink,green,blue

//검색 목적 배열데이터 출력
console.log('colors :', colors);

//왼쪽에서 오른쪽으로 검색
let index = colors.indexOf('green')
console.log('index : ', index); //결과: 3  (0, 1, 2, 3번이 그린)

//오른족에서 왼쪽으로 검색하다가 발견하면 왼쪽부터의 수를 세어서 출력
index = colors.lastIndexOf('green');
console.log('index : ', index); //결과: 3

//배열데이터 출력
console.log(colors.join());  //현재상태: yellow,purple,pink,green,blue

//배열데이터 지정하여 삭제
colors.splice(2, 2)  //결과: 삭제수행

//배열데이터 출력
console.log(colors.join()); //현재상태: yellow,purple,blue

//배열데이터 지정하여 추가
colors.splice(2, 0, 'pink', 'black');  //3번째 0,1,2번째 배열값 추가
 
//배열데이터 출력
console.log(colors.join()); //현재상태: yellow,purple,pink,black,blue

//
colors.splice(0);
console.log(colors.length)

//배열 생성
const intarr = [1, 2, 3, 4, 5];
console.log('inntarr : ', intarr.join()); //결과: inntarr :  1,2,3,4,5

//배열 복사?
const array = intarr.slice(2, 4);
console.log('array : ', array);  //삭제한 내용으로 배열 추가 생성, 결과: array :  (2) [3, 4]
console.log('array : ', intarr);  //기존배열은 그대로 있음, 결과: array :  (5) [1, 2, 3, 4, 5]





