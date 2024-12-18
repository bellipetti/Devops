// /*
// props = {
//     text: '메일'
//     color: 'red'    
// }

const Button = ({text, color}) => {

    console.log('text: ', text);
    console.log('color: ', color);
    
    const handleClick = (e) => {
        console.log('e: ', e);
        console.log('e.type: ', e.type);
        console.log('e.target: ', e.target); 
        console.log(' text ', e.target.textContent);
         
    }
    

    return ( 
        <>
            <button onClick={handleClick} style={{color: color}}>{text}</button>
        </>
        
    );
}
Button.defaultProps = {
    text: 'hlick',
    color: 'blue'
}
export default Button;