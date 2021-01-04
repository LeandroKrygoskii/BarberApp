import React from 'react';
import { View } from 'react-native';
import { InputArea , Input } from './style.js';

export default function SignInput({IconSvg , placeholder, value, onChangeText, password}) {
 return (
   <InputArea>
        <IconSvg width="24" height="24" fill="#FFf"/>

        <Input 
          placeholder={placeholder}
          placeholderTextColor="#fff"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={password}
        /> 
   </InputArea>
  );
}