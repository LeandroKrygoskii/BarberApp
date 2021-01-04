import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView` 
background-color: #63C2D1;
flex: 1;
justify-content: center;
align-items: center;
`;

export const InputArea = styled.View ` 
 width : 100%;
 padding: 40px;
`;

export const CustomBottom = styled.TouchableOpacity` 
  height: 60px;
  background-color: #268596;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const CustomButtomText = styled.Text` 
   font-size: 18px;
   color : #fff;
`;

export const SignInMessageButtom = styled.TouchableOpacity` 
flex-direction: row;
justify-content: center;
margin-top: 50px;
margin-bottom: 20px;
`;

export const SignInMessagebottomText = styled.Text` 
 font-size: 16px;
 color : #111;
`;

export const SignInMessagebottomTextBold = styled.Text`
font-size: 16px;
font-weight: bold
color : #111;
margin-left:5px;
`;






//InputArea,
//CustomBottom,
//CustomButtomText,
//SignInMessageButtom,
////SignInMessagebottomText,
//SignInMessagebottomTextBold