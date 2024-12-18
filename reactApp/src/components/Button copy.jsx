// /*
// props = {
//     text: '메일'
//     color: 'red'    
// }

const Button = ({text, color}) => {

    console.log('text: ', text);
    console.log('color: ', color);
    
    

    return (
        <>
            <button style={{color: color}}>{text}</button>
        </>
        
    );
}
button.defaultProps = {
    text: 'Click'
    color: 'blue'
}
export default Button;