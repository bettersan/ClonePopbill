import styled from 'styled-components';

const InputStyled = styled.input`
    border:solid 1px #b4b4b4;
    display :${(props) => props.display || "block"};
    width:${(props) => props.width || "100%"};
    height:${(props) => props.height || "40px"};
    padding:${(props) => props.padding || "0 0 0 30px"};
    margin:${(props)=>props.margin||"0 0 0 0"};
    font-size:${(props) => props.fontSize || "16px"};
`;

const Input = (props) =>{
    return(
        <InputStyled 
            type={props.type} 
            placeholder={props.placeholder}
            width={props.width}
            height={props.height}
            padding={props.padding}
            display={props.display}
            fontSize={props.fontSize}
            margin={props.margin}
            onChange={props.onChange}
        />
    )
}

export default Input;