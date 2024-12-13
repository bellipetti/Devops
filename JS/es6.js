// es6.js <-> es6.html
//간결한 메서드 (Concise Method)

const user = {
    id: 'javascript', 
    pwd: '1234',
    getUser: function() {  //method (객체안에있는함수라서 메소드라고한다)
        console.log('this : ', this);
        console.log(`fid : ${this.id}, pwd: $this.pwd}`);
        
        
    }
}
user.getUser();