// object1.js <->  object.html

//사용자정의객체 : 객체 리터럴

const member = { //스코프안 내용들을 프로퍼티 (properts) 라고 한다
    id: 'javascript',
    pwd: '1111',
    getMember: function() {
        //console.log('this : ', this);
        console.log(`id : ${this.id}, pwd : ${this.pwd}`);
        
    }
}

// console.log('member : ', member);
// console.log('member dataType : ' , typeof member);
// console.log('member dataType : ', toString.call(member));

// //id만 조회해보기
// console.log('id: ', member.id);  //방법1
// console.log('id: ', member['id']);  //방법2

member.getMember();