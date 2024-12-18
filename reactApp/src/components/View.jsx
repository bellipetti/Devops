// View.jsx
import { useParams } from "react-router-dom";

const view = () => {
    const {id} = useParams();
    console.log('id: ', id);  
    return (
        <>
            <h1> {id}번째 회원 정보입니다</h1>
            
            
        </>
    )
}
export default view;