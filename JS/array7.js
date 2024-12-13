// array7.js <->  array.html

// 1)연산메소드 reduce() :         합계구하기

const intarr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const total = intarr.reduce(function(prev, curr, index){

    console.log(`prev : ${prev}, curr : ${curr}, index : ${index}`);
    
    return prev + curr;
}, 0);    //0은 0으로 prev가 초기화된다

console.log('total :', total);  //결과: 55
