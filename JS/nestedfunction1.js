// nestedfunction1.js <->  index3.html

// 중첩함수선언
function outer() {

    const username = 'Alice';

    //내부함수
    function inner() {
        console.log('Hello. ', username);
        
    }

    return inner;   //함수리턴

}


//함수호출
// const innerFunc = outer();
// console.log('innerFunc : ' , innerFunc);
// console.log('innerFunc dataType : ' , typeof innerFunc);
// innerFunc();

//함숳호출을 한줄로 줄이기
outer()();
