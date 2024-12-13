// es5.js <-> es6.html
//프로퍼티 초기화단축 Object Literal Syntax Extension

const createUser = (username, age) => {
    return {
        // //원래코드  (같은코드)
        // username: username,
        // age: age

         // //해설
        // username <-이건 프로퍼티이름: username <- 이건 값,
        // age <-이건 프로퍼티이름: age<- 이건 값

        //코드단축  (같은코드)
        username,
        age
    }
}

const user = createUser('lee', 10);

console.log('user: ', user);

console.log('username: ', user['username']);   // ``백틸도 사용가능  
console.log('age : ', user['age']);            // ``백틸도 사용가능  

console.log('username: ', user.username);
console.log('age :', user.age.age);




