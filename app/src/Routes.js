import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserContextProvider from './contexts/userContext';
const { Navigator, Screen } = createStackNavigator();

import PreLoad from './pages/PreLoad';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MainTab from './pages/MainTab';

function Routes() {
 return (
  <UserContextProvider>
    <NavigationContainer>
      <Navigator
      screenOptions={{headerShown:false}}
      initialRouteName="PreLoad"
      >
         <Screen 
         name="PreLoad"
         component={PreLoad}
         />

          <Screen 
          name="SignIn"
          component={SignIn}        
         />

          <Screen 
          name="SignUp"
          component={SignUp} 
         />

         <Screen 
          name="MainTab"
          component={MainTab} 
         />

       </Navigator>
     </NavigationContainer>
    </UserContextProvider> 
  );
}

export default Routes;