// array5.js <->  array.html

// 1)객체리터럴을 이용한 객체 생성   [조건메소드] 
const members = [ 
    { firstName: "Julia", lastName: 'Roberts', age: 10} ,         //객체1개
       { firstName: "Brad", lastName: 'Pit', age: 20 },           //객체2개
       { firstName: "Leonardo", lastName: 'Dicaprio', age: 30 }   //객체3개 가 된 상태
   ];

   
// 1)조건메소드   20세이상 조회, 트루만 newMembers에 포함됨
const newMembers = members.filter(function(m, index) { //트루인경우 포함되고 트루가 아닌경우 포함안된다
    return m.age >= 20 ? true : false;

}) ;

// 포이츠로 출력
newMembers.forEach(function(m, index) {
  console.log(`firstName : ${m.firstName}, lastName : ${m.lastName}, age: ${m.age}`);
  
});



