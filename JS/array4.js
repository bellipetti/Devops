// array4.js <->  array.html

// 1)객체리터럴을 이용한 객체 생성    [맵 활용]
const members = [ 
    { firstName: "Julia", lastName: 'Roberts', age: 20} ,         //객체1개
       { firstName: "Brad", lastName: 'Pit', age: 20 },           //객체2개
       { firstName: "Leonardo", lastName: 'Dicaprio', age: 30 }   //객체3개 가 된 상태
   ];

   
// 1)맵 활용 (콜백함수를 사용)
const newMembers = members.map(function(member, index) {

    return {
        fullName: `${member.firstName} ${member.lastName}`,
        age: `${member.age}`
    }


});




newMembers.forEach(function(m, index) {

    console.log(`fullName : ${m.fullName}, age : ${m.age}`);

});