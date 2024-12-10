// callback1.js <->  main1.html

// 콜백함수

function hello(username, callback) {

    console.log('callback : ', callback);

    callback(username);

}


function consoleHello(username) {
    console.log('Hello, ', username);

    

}

function alertHello(username) {
    alert('Hello, '+ username);
    
    

}



// 함수호출

// console.log('consoleHello : ', consoleHello);

hello('kim', consoleHello);
// hello('kim', alertHello);