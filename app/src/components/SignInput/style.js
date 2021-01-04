import React from 'react';
import styled from 'styled-components/native';

export const InputArea = styled.View` 
     width: 100%;
     height: 60px;
     background-color: rgba(0,0,0,0.3)
     flex-direction : row;
     border-radius: 30px;
     padding-left: 15px;
     align-items: center;
     margin-bottom: 15px;
`;

export const Input = styled.TextInput` 
 flex: 1;
 font-size: 16px;
 color: #fff;
 margin-left:20px;
 
`;