// ArticleView.jsx
import { Row, Col, Card, Button } from 'react-bootstrap'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {getArticle, removeArticle} from '../api/article';
import ArticeList from './ArticleList';
import ResultModal from './ResultModal';


// const ArticleView = () => {
//     /*
//     const params = useParams();
//     const id = params.id;
//     console.log(params);
//     console.log(params.id);
//     */

//     const nav = useNavigate();

//     const { id } = useParams();

//     const [board, setBoard] = useState({});

//     const getBoard = async () => {
//         const board = await axios.get(`http://localhost:5000/view/${id}`);
//         console.log(board);
//         console.log(board.data[0]);
//         setBoard(board.data[0]);
//     }

//     // BoardView 컴포넌트가 마운트될 때
//     useEffect(() => {
//         getBoard();
//     }, []);


//     const onDelete = async () => {
//         if (window.confirm('게시글을 삭제하시겠습니까?')) {
//             const data = await axios.get(`http://localhost:5000/delete/${id}`);
//             if (data.status == 200) {
//                 nav('/list', { replace: true });
//             }
//         }
//     }
const ArticleView = () => {
    // {id: 5} <= 이런식으로 전달된다 ,결론은 게시글 받는거
    const { id } = useParams();  // {id: 5} 
    const [ article, setArticle] = useState({});
    const [result, setResult] = useState(null);
    
    const navigate = useNavigate();

    
    useEffect(() => {  
        //컴포넌트가 마운트되는 작업 해본다
        getArticle(id)
            .then((data) => {
                setArticle(data);
            })
            .catch((error) => {
                console.log('error: ', error.resonse.data.message);
            })
    }, [id]);     

    
    const handleClickModiy = () => { 
        //게시글 수정
        navigate({pathname: `/modify/${id}`});
    }
    const handleClickRemove = () => { 
        //게시글 삭제
        if (confirm('게시글을 삭제하시겠습니까?')) {
            removeArticle(id)
            .then(data => {
                setResult(data.message);

            })
            .catch(error => {
                console.log('error: ', error);

            })
        }
    }

    const closeModal = () => {
        setResult(null);
        navigate({pathname: `/`});
    }

    return (
        <>
        <div className="board-view">
            <Row className='my-5'>
                <Col className='px-5'>
                    <h3 className='my-5 text-center'> {id}번 게시글 정보</h3>
                    <div className='text-end my-2'>  
                            <Button className='btn-sm mx-2' onClick={handleClickModiy}>수정</Button> &nbsp;&nbsp;
                        <Button className='btn-sm' variant='danger' onClick={handleClickRemove} >삭제</Button>
                    </div>
                    <Card>
                        <Card.Body>
                            <h5> {article.title} </h5>
                            <hr />
                            <div className='cArea'>{article.contents}</div>
                        </Card.Body>
                        <Card.Footer>
                          Created on {new Date(article.reg_date).toLocaleString()} by {article.writer}
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
        { result != null ? <ResultModal title={'게시글 삭제'} content={'게시글이 삭제되었습니다'} callbackFn={closeModal}/> : <></>}
        </>
    );
}


export default ArticleView;