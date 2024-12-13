// array2.js <->  array.html

// 1)객체리터럴을 이용한 객체 생성 
const member = {

    firstName: 'Julia' ,
    lastName: 'Roberts' ,
    age: 10
}

console.log('member : ', member);
console.log('member dataType : ', typeof member);
console.log('member dataType : ', toString.call(member)); //[object Object]

// 2)위 객체를 빠르게 정보를 조회하는법
for (const prop in member) {
    console.log('property : ', prop);
    console.log('value : ', member[prop]); 
}

//age 나이에 대한 값 출력
let result = member.age;
console.log('result : ' , result);

result = member ['age'];
console.log('result: ' , result);

//프로퍼티 값 변경/할당
member.age = 20;
console.log('result : ', member.age);

member['age'] = 30;
console.log('result : ' , member['age']);
console.log('member : ', member);







