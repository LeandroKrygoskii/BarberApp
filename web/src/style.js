import React from 'react';
import styled from 'styled-components';

export const InputArea = styled.form`
width: 100%;
height: 500px;
background-color: rgba(0,0,0,0.3);
display: flex;
flex-direction : column;
align-items: center;
justify-content: center;
border-radius: 30px;
padding-left: 15px;
padding-bottom: 10px;
align-items: center;
margin-bottom: 15px;
 
`;

export const Input = styled.input`
height:50px;
width:90%;
border-radius: 15px;
font-size: 16px;
color: #000;
margin-bottom: 15px;
`;

export const Btn = styled.button`
  height: 80px;
  width: 70%;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
