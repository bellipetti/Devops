// article.js
// 게시판프로젝트 비동기처리   API 요청하는 코드
// import axios from 'axios';
import axios from "axios";

const API_SERVER_HOST = 'http://localhost:5000';

// 게시글 목록 조회 API 요청
export const getArticleList = async () => {
    const response = await axios.get(`${API_SERVER_HOST}/List`);
    console.log('response: ', response);
    console.log('response: ', response.data);
    return response.data;
}


// 게시글 등록 API 요청
export const postArticle = async (article) => {
    const response = await axios.post(`${API_SERVER_HOST}/Write`, article);
    return response.data; 
}  

// 게시글 상세조회 API 요청
export const getArticle = async(id) => { 
    const response = await axios.get(`${API_SERVER_HOST}/view/${id}`);
    return response.data[0];
}

// 게시글 수정 API 요청
export const modifyArticle = async(article) => {
    const response = await axios.post(`${API_SERVER_HOST}/modify/${article.id}`, article);
    return response.data; 
} 


// 게시글 삭제 API 요청
export const removeArticle = async (id) => {
    const response = await axios.get(`${API_SERVER_HOST}/remove/${id}`);
    return response.data;
}