// async4.js <-> async.html

//PROMISE객체 프라미스객체       

const fetchData = function() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            
        const data = 'fetch data from the server';
        // const data = '';     //데이터가 없다고 가정할때 주석해제

        if (data != '') {
            resolve(data);
        } else {
            reject('Error');
        } 

      }, 2000);  // 2ms : 2초
    });
}
const processData = function(data) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            
            const isSuccess = true;
            // const isSuccess = false;  // 프로세스에서 에러 발생했다고 가정

            if (isSuccess) {
                resolve(`process data : ${data}`);
            } else {
                reject('Process Error');
            }
       
        
        }, 1000); //1초
    
    });
}
const task = async () => {       //async 와 await는 한쌍, 비동기관련 기술
    const data = await fetchData();
    console.log('data: ', data);
    const result = await processData(data);
    return result;  //Promise 객체
}
task()
    .then((data) => {
        console.log('data: ', data);
    })
    .catch((error) => {
        console.log('error: ', error);
    });