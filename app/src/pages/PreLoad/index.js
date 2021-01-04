import React, { useEffect, useContext } from 'react';
import  { Container, LoadingIcon } from './style.js'
import AsyncStorage from '@react-native-community/async-storage';
import BarberLogo from '../../images/barber.svg';
import { UserContext } from '../../contexts/userContext';
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api';

export default function PreLoad() {
   
  const {dispatch : userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(()=>{
       const checkToken = async () =>{
 
               try {

                const token = await AsyncStorage.getItem('token');
              if(token){
                let res = await api.checkToken(token)
                if(res.token){
                  await AsyncStorage.setItem('token', res.token);
                  userDispatch({
                   type : 'setName',
                   payload:{
                     name : res.name
                   }
                  }); 
                  navigation.reset({
                    routes:[{name:'MainTab'}]
                  });

                }
                else{
                  navigation.navigate('SignIn');
                }                      
              }
               else{
                navigation.navigate('SignIn');
               }
                 
               } catch{
                navigation.navigate('SignIn');
               }
            
                                                      
       }
       checkToken();
  },[]);



 return (
   <Container>
         <BarberLogo width ="100%" height="160"/>

         <LoadingIcon size="large" color="#FFFFFF"/>
   </Container>
  );
}