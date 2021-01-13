import React from 'react';
import styled from 'styled-components/native';

export const TabArea = styled.View` 
      height: 60px;
      background-color: #4EADBE;
      flex-direction: row;
      
`;

export const TabItem = styled.TouchableOpacity` 
      flex: 1;
      justify-content: center;
      align-items: center;

`;

export const TabItemCenter = styled.TouchableOpacity` 
   height: 70px;
   width : 70px;
   justify-content: center;
   align-items: center;
   background-color : #FFF;
   border-radius : 35px;
   border : 3px solid #4EADBE;
   margin-top: -20px;
`;

export const NameUser = styled.Text`
  font-size: 14px;
  color : #fff; 
`;