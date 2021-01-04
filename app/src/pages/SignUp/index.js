import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
   Container,
   InputArea,
   CustomBottom,
   CustomButtomText,
   SignInMessageButtom,
   SignInMessagebottomText,
   SignInMessagebottomTextBold
} from './style.js'

import BarberLogo from '../../images/barber.svg'
import SignInput from '../../components/SignInput';
import EmailIcon from '../../images/email.svg';
import LockIcon from '../../images/lock.svg';
import PersonIcon from '../../images/person.svg';

import api from '../../services/api.js';

export default function SignIn() {
  
  const navigation = useNavigation();
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  

  const handleSignClick = async () =>{
      
    if(nameField != '' && emailField != '' && passwordField != ''){
     
      try {
        let res = await api.cadastro(nameField,emailField,passwordField)
        alert("cadastro bem sucedido")
        navigation.navigate("SignIn")
      } catch (error) {
         alert("Esse email já foi cadastrado")
      }   

    }
    else{
      alert("Por favor, preencha todos os campos !")
    }
        
        
      //Req Axios
         // const data = new FormData();
        ///  data.append('name', nameField);
        //  data.append('email', emailField);
        //  data.append('password', passwordField);

       //  await api.post('cadastro', data).then(() => {
       //     alert("cadastro realizado")
       //   }).catch(function (error){

           // if(error.response) {
              
            //  console.log(error.response.data);
           //   console.log(error.response.status);
           //   console.log(error.response.headers);

          //  } else if (error.request) {
              
          //    console.log(error.request);

          //  } else {

           //   console.log('Error', error.message);
           // }
            
        //  })
            
          
  }
  
  const handleMessageButtomClick = () =>{
      navigation.reset({
        routes:[{name:'SignIn'}]
      });
  }


 return (
   <Container>
        <BarberLogo width="100%"  height="160"/>

        <InputArea>

             <SignInput  
               IconSvg={PersonIcon}
               placeholder="Digite seu Nome"
               onChangeText={t=>setNameField(t)}
               value={nameField}
               />

               
               <SignInput  
               IconSvg={EmailIcon}
               placeholder="Digite seu Email"
               onChangeText={t=>setEmailField(t)}
               value={emailField}
               />

               <SignInput
                IconSvg={LockIcon}
                placeholder="Digite a sua Senha"
                onChangeText={t=>setPasswordField(t)}
                value={passwordField}
                password={true}
                />

            <CustomBottom onPress={handleSignClick}>
              <CustomButtomText>CADASTRAR</CustomButtomText>
            </CustomBottom>

        </InputArea>

        <SignInMessageButtom onPress={handleMessageButtomClick}>
          <SignInMessagebottomText>Já possui uma conta?</SignInMessagebottomText>
          <SignInMessagebottomTextBold>Entrar</SignInMessagebottomTextBold>
        </SignInMessageButtom>
   </Container>
  );
}