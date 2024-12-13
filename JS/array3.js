// array3.js <->  array.html

// 1)객체리터럴을 이용한 객체 생성 
const members = [ 
    { firstName: "Julia", lastName: 'Roberts', age: 20} ,         //객체1개
       { firstName: "Brad", lastName: 'Pit', age: 20 },           //객체2개
       { firstName: "Leonardo", lastName: 'Dicaprio', age: 30 }   //객체3개 가 된 상태
   ];

   // ※)배열접근해서 출력하기   //임의로 직접 해본
   let result = members[1].age;
   console.log('result : ' , result);
   
   result = members[2] ['age'];
   console.log('result: ' , result);


// 2)배열접근해서 출력하기
const obj = members[1]; 

console.log(members[1] == obj);
console.log(members[1] === obj);

console.log('obj.age : ', obj.age);
console.log("obj['age'] : ", obj['age']);

console.log("members[1]['age'] : ", members[1]['age']);
console.log("members[1][age] : ", members[1].age);


// 1)포이츠(forEach 활용)  콜백함수등록 한거  '멤버가 가르키는 콜백수만큼 수행한다'
members.forEach(function(member, index){

    // 2)한줄씩 출력 템플릿리터럴을 활용  template literal : 백틸 `
    // console.log(`firstName : ${index}, firstName : ${member.firsName}`);
    
    // 2-1)
    //console.log(`firstName : ${member.firstName}, lastName : ${member.lastName}, age: ${member.age}`); 

    // 2-3 
    // console.log(`firstName : ${member['firstName']}, lastName : ${member['lastName']}, age: ${member['age']}`); 
});

// 상황에 따라 인덱스를 사용해야 할 경우 출력방법
members.forEach(function(member, index) {

    if (index  == 0) {
        console.log(`firstName : ${member['firstName']}, lastName : ${member['lastName']}, age: ${member['age']}`);     
    }     
    
    
});
