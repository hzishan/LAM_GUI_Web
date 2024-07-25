import React from 'react';
import './css_styled/App.css';
import styled from 'styled-components';


const LoginContainer = styled.div`
    padding: 16px;
`;

const LoginItem = styled.div`
    p{
        font-size: 20px;
        color: #b2bcf7;
    }
    input{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        box-sizing: border-box;
    }
`;

const LoginButton = styled.button`
    background-color: #5267e3;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
`;

function Login() {

    return(
        <LoginContainer>
            <LoginItem>
                <p>Account</p>
                <input type="text" placeholder="enter account"/>
            </LoginItem>
            <LoginItem>
                <p>Password</p>
                <input type="password" placeholder="enter password"/>
            </LoginItem>
            <LoginButton>Login</LoginButton>
        </LoginContainer>
    )
}

export default Login;