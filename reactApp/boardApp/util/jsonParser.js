// jsonParser.js

export const jsonParser = (req, res, next) => {
    let data = '';

    // 클라이언트 요청이 수신되었을때
    req.on('data', (chunk) => {
        data += chunk;
    });
    
    // 클라이언트 요청수신이 완료되었을때  (완료되었을때 콜백함수가 호출이 된다, 데이터변환작업)
    req.on('end', () => {
        try {
            req.body = JSON.parse(data);
            
        } catch(error) {
            req.body = {};
        }
        next();  // 미들웨어, Route Handler 호출  :정말중요한부분, next가 없으면 호출이 안되고 끝나버림
    });
}
