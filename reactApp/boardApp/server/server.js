// server.js
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import {jsonParser} from '../util/jsonParser.js'

// App 생성
const app = express();
const PORT = 5000;

// 미들웨어 등록  (반드시 서버를 실행하기 전에 등록해야한다)
app.use(cors());
app.use(jsonParser);

// 웹서버실행
app.listen(PORT, () => {
    console.log(`Web Server running at http://localhost:${PORT}`);
})

// DB연결 설정
const db = mysql.createConnection({
    host: 'localhost',
    user: 'react',
    password: '1234',
    port: '3306',
    database: 'db_board'
});
// Route    (데이터베이스 연동해서 게시글정보를 갖고오는 코드)   
// 게시글정보를 갖고와서 제이슨코드로 넘겨주는?   , 이함수가 실제로 클라이언트의 요청을 처리하는 콜백함수라고 볼수있다
app.get('/list', (req, res) => {
    // const sql = 'select id, title, contents, writer, re=g_date from article order by id desc';
    const sql = "SELECT id, title, contents, writer, reg_date FROM article ORDER BY id DESC";
                // 틸드
//    const sql = `   
//     select id, title, contents, writer, reg_date
//     from article
//     order by id desc\
//    `;
    db.query(sql, (error, data) => {
        if (error) {
            console.log('error: ', error);
            res.status(500).json({message: 'db error'});

        } else {
            res.status(200).json(data);
        }

    })
})
// // DB연결 테스트
// db.connect((error) => {
//     console.log('error: ', error);
//     if (error) {
//         console.log('DB 연결 실패!!');
//         // console.log('error: ', error);
//     } else {
//         console.log('DB 연결 성공!!');
//     }
// })


// 게시글 등록 요청  (등록요청을 처리하는 API)
app.post('/write', (req, res) => {
    const writer = req.body.writer;
    const contents = req.body.contents;
    const title = req.body.title;
    const sql = `
            INSERT INTO article (writer, contents, title)
            VALUES (?, ?, ?)
    `; 
    db.query(sql, [writer, contents, title], (error, data) => {    // 쿼리수행 목적
        if (error) {
            res.status(500).json({message: 'db error'});
        } else {
            res.status(200).json({message: 'success'});
        }
    });
})


// 게시글 상세조회 요청  (상세조회를 처리하는 API)
app.get('/view/:id', (req, res) => {   // /view/:id로 받아온다 메소드는 get방식

    const id = parseInt(req.params.id);  // id를 통해서 숫자를 가져올수있다
    console.log('id: ', id);
    const sql = ` SELECT id, title, contents, writer, reg_date 
                  FROM article 
                  WHERE id = ? `;   //무름표 id = ? 를 전달된 ID값으로 전달받음
    
                  db.query(sql, [id], (error, data) => {   // DB쿼리문
        if (error) {
            console.log('error: ', error);
            res.status(500).json({message: 'db error'});

        } else {
            res.status(200).json(data);
        }

    })

})


// 게시글 수정 요청  (수정을 처리하는 API)
app.post('/modify/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    const writer = req.body.writer;
    const title = req.body.title;
    const contents = req.body.contents;

    const sql = `
        UPDATE article
        SET writer = ?, title = ?, contents = ?, reg_date = NOW()
        WHERE id = ?`;
    db.query(sql, [writer, title, contents, id], (error, data) => {
        if (error) {
            console.log('error: ', error);
            res.status(500).json({message: 'db error'});

        } else {
            res.status(200).json({message: 'success'});
        }
    })
})


// 게시글 삭제 요청  (게시글을 삭제하는 API)
    // 쿼리 등록문
app.get('/remove/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const sql = `
        DELETE FROM article
        WHERE id = ?
    `;

    // 쿼리 실행문
    db.query(sql, [id], (error, data) => {
        if (error) {
            console.log('error: ', error);
            res.status(500).json({message: 'db error'});

        } else {
            res.status(200).json({message: 'success'});
        }
    });
})