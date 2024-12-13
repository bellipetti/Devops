// async3.js <-> async.html

//PROMISE객체 프라미스객체

const myPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        const isSuccess = true; //비동기 작업을 성공적으로 수행했다는 가정
        if (isSuccess) {
            resolve('success')
        } else {
            reject('fail')
        }
    }, 2000);
});

myPromise
    .then((data) => {
        console.log('data: ', data);    
    })
    .catch((error) => {
        console.log('error: ', error);
        
    })
