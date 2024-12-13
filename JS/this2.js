// this2.js <->  object.html

const member1 = {
    id: 'java',
    pwd: '1111',
}

const member2 = {
    id: 'javascript',
    pwd: '2222'
}

const update = function(id, pwd) {
    this.id = id;
    this.pwd = pwd;
}

const whatIsThis = function() {
    console.log('this : ', this);
    
}
// whatIsThis.call(member1)  //방법1

// whatIsThis.apply(member2)  //방법2



//업데이트활용
console.log(member1);
// update.apply(member1, ['react', '1234']);     //변경방법1
// update.call(member1, 'react2', '4444');       //변경방법2


const modify = update.bind(member1);             //변경방법3
/*
const modify = finction(id, pwd) {
    member1.id = id;
    member1.pwd = pwd;
*/

modify('spring', '1234')

console.log(member1);



