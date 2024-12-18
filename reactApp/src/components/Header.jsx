// Header.jsx 
// 함수형 펑션컴포넌트

const Header = () => {
    const username = 'Hong guil-dong';
    const age = 10;
    const gender = 'M';

    return (
        
        <>
            <h3>{`username :${username}, ㅁㅎㄷ : ${age}`}</h3>
            <h3>성별 : {gender === 'M' ? '남' : '여'}</h3>
        </>
    );
}
export default Header;
