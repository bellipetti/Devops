
// function2.js  <->  main1.html

// 함수표현식

const add = function(a, b) {
    return a + b;

}

console.log("add : ", add);

console.log("add : ", typeof add);  //function

console.log(add(1, 2));



const func = add;

console.log(func == add);

console.log(func === add);  //function
