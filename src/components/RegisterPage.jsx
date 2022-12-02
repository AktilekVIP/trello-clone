import React, { useState } from "react";
import trelloLogo from "../assets/trello-logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const signInData = {
    email: "user@gmail.com",
    password: "123",
  };
  return (
    <>
      <Wrapper>
        <figure>
          <img src={trelloLogo} alt='' />
        </figure>
        <RegisterWrapper>
          <RegisterForm>
            <Label>
              Вход в Trello
              <input
                type='email'
                id='email'
                required
                placeholder='Enter your gmail'
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Label>
            <Label>
              <input
                type='password'
                placeholder='Enter your password'
                maxLength='3'
                required
                id='password'
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </Label>
            <Helper>email: user@gmail.com password: 123</Helper>
            <button type='submit'>
              {userData.email === signInData.email &&
              userData.password === signInData.password ? (
                <Link to='/form'>Sign in</Link>
              ) : (
                <p>Sign up Please</p>
              )}
            </button>
          </RegisterForm>
        </RegisterWrapper>
      </Wrapper>
    </>
  );
};
const Helper = styled.span`
  color: gray;
  margin-bottom: 15px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 25px 40px;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
`;
const RegisterForm = styled.form`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  & > label {
    display: flex;
    font-size: 20px;
    font-weight: 700;
    gap: 20px;
  }

  & > button {
    cursor: pointer;
    width: 320px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background: #61bd4f;
    background: linear-gradient(to bottom, #61bd4f 0%, #5aac44 100%);
    color: #fff;
  }
  & > button:hover {
    background: linear-gradient(to bottom, #61bd4f 0%, #5aac44 100%);
    background: #61bd4f;
  }
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #5e6c84;
  font-size: 16px;
  letter-spacing: -0.01em;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 25px;
  & > input {
    width: 320px;
    height: 40px;
    font-size: 14px;
    background-color: #fafbfc;
    border: 2px solid #dfe1e6;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 3px;
    height: 40px;
    -webkit-transition: background-color 0.2s ease-in-out 0s,
      border-color 0.2s ease-in-out 0s;
    transition: background-color 0.2s ease-in-out 0s,
      border-color 0.2s ease-in-out 0s;
  }
`;
export default RegisterPage;
