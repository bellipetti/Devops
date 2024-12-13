// es2.js <-> es.html
//Rest Parameter    에크마스크립트


function sum(...args) {   //args 변수이름은 아무거나 넣어도됨 
    // console.log('args : ' , args);
    // console.log('args dataType : ', typeof args);
    // console.log('agrs dataType : ,', toString.call(args));
    

    //reduce, 콜백함수를 활용한 합계구하기
    return args.reduce(function(prev, curr) {
        return prev + curr;
    }, 0);
    
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3));

