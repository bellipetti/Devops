// es11.js <-> es6.html
// Object || Array Destructuring 객체 구조 분해

const user = {
    id: 'javascript',
    pwd: '1234'
}
// const {id, pwd} user;  //객체에는 중괄호 { }를 넣어야한다
// console.log(`id: ${id}, pwd: ${pwd}`);

const {id} = user;  //객체에는 중괄호 { }를 넣어야한다
console.log(`id: ${id}`);
const {pwd} = user;
console.log(`id: ${pwd}`);



//함수응용
function userid({id}) {
    console.log(`id: ${id}`);
}
userid(user);



//구조분해응용 간단하게 출력예제
const person = { 
    userId: 'java', 
    displayName: 'jode', 
    fullName: { 
    firstName: 'John', 
    lastName: 'Doe' 
    } 
 }; 
//  //구조분해하지않고 출력문법
//  console.log(`lastName: ${person.fullName.lastName}`);  //결과: lastName: Doe




 //구조분해활용   
 const {userId, fullName: {lastName}} = person;
 console.log(`userid: ${userid}, lastName: ${lastName}`);  //결과: lastName: Doe
 



// //forof활용 - forof는 배열을 사용해야함
// const persons = [
//     { 
//         userid: 'java1', 
//         displayName: 'jode1', 
//         fullName: { 
//         firstName: 'John1', 
//         lastName: 'Doe1' 
//         } 
//      } ,
//      { 
//         userid: 'java2', 
//         displayName: 'jode2', 
//         fullName: { 
//         firstName: 'John2', 
//         lastName: 'Doe2' 
//         } 
//      }
// ];
// for (const {userid: id, fullName: {lastName: name}} of persons) {
//     console.log(`user: ${id}, lastName: ${name}`);
// }

 
    
    