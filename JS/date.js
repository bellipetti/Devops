// date.js <->  date.html

//날짜객체생성
const now = new Date();
console.log('now : ', now);

//
const year = now.getFullYear();
const month = now.getMonth() + 1  //1월이 0이 반환되서 +1을 해야 1이 출력이된다
const date = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();
const weekday = now.getDay();
console.log(`${year}-${month}-${date} ${hour}:${minute}:${second}`);


//
const dayofWeeks = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
console.log('weekday : ', weekday);


//
console.log('weekday : ', dayofWeeks[weekday]);  // 0: 일요일 

