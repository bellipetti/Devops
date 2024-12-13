// es8.js <-> es6.html
//Spread Operator (전개 구문)

//함수호출에 대한 내용

const add = (x, y, z=0)  => {
    console.log(`x:${x}, y:${y}, z:${z}`);
    
    return x + y + z;

}
const intarr = [1, 2, 3, 4];
// console.log('result : ', add(...intarr));    // ...이 없으면 배열이 전달된다


// 객체복사
const user = {
    username: 'lee' ,
    age: 10

}
const copy = user;
console.log('user: ', user);
console.log('copy: ', copy);
user.age = 20;
// user['age'] = 20;

console.log('copy : ', copy);
console.log('user : ', user);

console.log(user === copy);  //true


//객체복제(clone)     =>원본이 변경되지않는다
const clone = {...user};
console.log(user === clone); //false
console.log('clone: ', clone);
console.log('user: ', user);

clone['username'] = 'kim';
console.log('user.name: ', user.username);
console.log('clone.name: ', clone.username);


//객체병합
const member = {
    id: 'javascript',
    pwd: '1234'
}
const person = {...member, ...user};
console.log('person: ' , person);  // {id: 'javascript', pwd: '1234', username: 'lee', age: 20}
console.log(`id : ${person.id}`);
console.log(`username: ${person['username']}`);



