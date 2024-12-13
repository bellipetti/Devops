// operator2.js <->  main1.html

// 삼항 연산자

const num = 5;




if (num % 2 == 0) {   // 나머지 연산자
    console.log('even');
} else {
    console.log("odd");
}



// 위 코드를 3항연산자로 변경

const result = num % 2 == 0 ? 'even' : 'odd';

console.log('result : ', result);