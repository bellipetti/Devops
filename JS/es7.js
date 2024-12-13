// es7.js <-> es6.html
//프로퍼티의 계산된 이름


const name = 'username';
const member = {
    id: 'javascript',
    pwd: '1234',
    [name]: 'hong guil-dong'

}
console.log('member : ', member); //{id: 'javascript', pwd: '1234', username: 'Hong guil-dong'}
console.log(`id : $Pmember.id}, name: ${member[name]}`);
// console.log(`id: ${member.id}, name: ${member.name}`);//undefined <-값이 고정된 속성의 값이 아니라서 출력된다고함
// console.log(`id : ${member.id}, name : ${member['name']}`);//undefined<-값이 고정된 속성의 값이 아니라서 출력된다고함
// console.log(`id: ${member.[`id`]}, name: ${member.[`name`]}`);  //사용불가문법이라서 오류가 난다
// console.log(`id : ${member.[`id`]}, name : ${member[`name`]}`);  //사용불가문법이라서 오류가 난다


