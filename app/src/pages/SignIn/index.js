import React, {useState , useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {
   Container,
   InputArea,
   CustomBottom,
   CustomButtomText,
   SignInMessageButtom,
   SignInMessagebottomText,
   SignInMessagebottomTextBold
} from './style.js'

import { UserContext } from '../../contexts/userContext';

import BarberLogo from '../../images/barber.svg'
import SignInput from '../../components/SignInput';
import EmailIcon from '../../images/email.svg';
import LockIcon from '../../images/lock.svg';

import Api from '../../services/api';


export default function SignIn() {
  
  const {dispatch : userDispatch} = useContext(UserContext);
  const navigation = useNavigation();
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');


  const handleSignClick = async () =>{

    if(emailField != '' && passwordField != ''){
      
      try {

        let json = await Api.login(emailField, passwordField);
        
        console.log(json)
        if(json.token){        

          await AsyncStorage.setItem('token', json.token);

          userDispatch({
             type : 'setName',
             payload:{
               name : json.name
             }
          });

          navigation.reset({
            routes:[{name:'MainTab'}]
          });

        }
      } catch (error) {
        alert("usuario e/ou senha não correspondem")
      }
     
    }else{
      alert("Preencha os Campos !!");
    }

  }
  
  const handleMessageButtomClick = () =>{
      navigation.reset({
        routes:[{name:'SignUp'}]
      });
  }


 return (
   <Container>
        <BarberLogo width="100%"  height="160"/>

        <InputArea>
               
               <SignInput  
               IconSvg={EmailIcon}
               placeholder="Digite seu Email"
               value={emailField}
               onChangeText={t=>setEmailField(t)}
               />

               <SignInput
                IconSvg={LockIcon}
                placeholder="Digite a sua Senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
                />

            <CustomBottom onPress={handleSignClick}>
              <CustomButtomText>LOGIN</CustomButtomText>
            </CustomBottom>

        </InputArea>

        <SignInMessageButtom onPress={handleMessageButtomClick}>
          <SignInMessagebottomText>Ainda nao possui uma conta?</SignInMessagebottomText>
          <SignInMessagebottomTextBold>Cadastre-se</SignInMessagebottomTextBold>
        </SignInMessageButtom>
   </Container>
  );
}