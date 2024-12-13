// json3.js <->  json.html

const users = [{
    "name": 'lee',
    "age": 10,
    "email": 'java1@gmail.com'
}
,
{
    "name": 'park',
    "age": 20,
    "email": 'java2@gmail.com'
}
,
{
    "name": 'kim',
    "age": 30,
    "email": 'java3@gmail.com'
}
]
// // 출력방법
// for (const user of users) {
//     console.log('email: ' , user.email);
// }

console.log('users datatype : ', typeof users);
console.log('users datatype : ', toString.call(users));

const jsonStr = JSON.stringify(users);  //string
console.log('jsonStr :', typeof jsonStr);  //String


//배열이 아니라서 출력불가
console.log('jsonStr.email : ', jsonStr[0].email);  // Undefinded


//출력하고 싶으면 
const jsonObject = JSON.parse(jsonStr);
console.log('jsonObject[0].email : ', jsonObject[0].email);  // jsonObject[0].email :  java1@gmail.com


