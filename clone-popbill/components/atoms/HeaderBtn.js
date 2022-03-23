import Styled from "styled-components";

const HeaderBtnStyled = Styled.a`
    display:inline-block;
    font-size:13px;
    padding:7px 10px 8px;
    border-radius:2px;
    margin : 0 0 0 10px;
    color : ${(props) => props.color || "#000"};
    background-color : ${(props) => props.bg || "#eee" };
`;

const HeaderBtn = ({text, href, color, bg}) =>{
    return(
        <HeaderBtnStyled href={href} title={text} color={color} bg={bg}>
            {text}
        </HeaderBtnStyled>
    );
}

export default HeaderBtn