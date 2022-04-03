import {useState, useEffect} from 'react';
import Header from 'components/organisms/common/Header'
import Footer from 'components/organisms/common/Footer'
import Input from 'components/atoms/Input'
import styled from 'styled-components'

const LoginContainer = styled.div` 
    padding:30px 0; 
    background-color:#f6f6f6; `;
const LoginBox = styled.div` 
    background-color:#fff;
    height:auto;
    display:flex;
    justify-content:space-between;
    box-shadow:1px 1px 10px -1px #cacaca`;
const LoginForm = styled.form` 
    width : 63.5%; 
    padding : 132px 110px;
    margin : 0 0 30px 0;
    h2 {
        font-size:25px;
        border-bottom:solid 1px #222;
        padding : 0 0 15px 0;
        margin : 0 0 20px 0;
    }
`;
const LoginBtn = styled.a`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:54px;
    margin:20px 0 0 0;
    background-color:#16416d;
    color:#fff;
    font-size:18px;
    font-weight:bold;
    cursor:pointer;
`;

const LoginBanner = styled.div `width : 36.5%;`;

const Login = () =>{
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleKeyDown = (e) => {
        if(e.keyCode === 13){
            loginSubmit();
        }
    }

    const loginSubmit = () =>{
        console.log(inputId);
        console.log(inputPw);
    }

    return (
        <>
            <Header/>
            <LoginContainer className="container">
                <div className="inner">
                    <LoginBox>
                        <LoginForm onKeyDown={(e) => {handleKeyDown(e)}}>
                            <h2>로그인</h2>
                            <Input 
                                type="text" 
                                placeholder="아이디 입력" 
                                height="48px"
                                padding="0 0 0 15px"
                                fontSize="15px"
                                margin="0 0 15px 0"
                                onChange={(e) => { setInputId(e.target.value) }}
                            />
                            <Input
                                type="password"
                                placeholder="비밀번호 입력"
                                height="48px"
                                padding="0 0 0 15px"
                                fontSize="15px"
                                onChange={(e) => {setInputPw(e.target.value)}}
                            />
                            <LoginBtn onClick={loginSubmit}>로그인</LoginBtn>
                        </LoginForm>
                        <LoginBanner>
                            <a href="/Taxinvoice">
                                <img src="/images/member/login_banner.gif" width="100%"/>
                            </a>
                        </LoginBanner>
                    </LoginBox>
                </div>
            </LoginContainer>
            <Footer/>
        </>
    );
}

export default Login;