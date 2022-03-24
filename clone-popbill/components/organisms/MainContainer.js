import styled from 'styled-components';

const VisualStyled = styled.img`
    display : block;
    margin : 0 auto;
`;
const MainTempStyled = styled.img`
    display : block;
    margin : -40px auto 0;
`;


const MainContainer = () => {
    return (
        <div className="container">
            <VisualStyled src="images/main/visual.jpg" />
            <MainTempStyled src="images/main/main_temp.png"/> 
        </div>
    );
}

export default MainContainer;