// array6.js <->  array.html

// 1)객체리터럴을 이용한 객체 생성   [조건메소드 every, some] 
const members = [ 
    { firstName: "Julia", lastName: 'Roberts', age: 10} ,         //객체1개
       { firstName: "Brad", lastName: 'Pit', age: 20 },           //객체2개
       { firstName: "Leonardo", lastName: 'Dicaprio', age: 30 }   //객체3개 가 된 상태
   ];
   
   
// 1) 
let flag = members.some(function(m, index) {

    return m.firstName === 'Julia' ? true : false;

});


console.log('flag : ', flag);



flag = members.every(function(m, index) {

    return m.firstName === 'Julia' ? true : false;

});


console.log('flag : ', flag);
