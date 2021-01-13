import React from 'react';
import {  createBottomTabNavigator  } from '@react-navigation/bottom-tabs';


import CustomTabBar from '../../components/CustomTabBar';

import Home from '../Home';
import Search from '../Search';
import Appointments from '../Appointments';
import Favorites from '../Favorites';
import Profile from '../Profile';



export default function MainTab() {

    const Tab = createBottomTabNavigator();

 return (

      <Tab.Navigator tabBar={ props=> <CustomTabBar {...props}/>}>

          <Tab.Screen 
          name = "Home"
          component ={Home}
          />
          <Tab.Screen 
          name = "Search"
          component ={Search}
          />
          <Tab.Screen 
          name = "Appointments"
          component ={Appointments}
          />
          <Tab.Screen 
          name = "Favorites"
          component ={Favorites}
          />
          <Tab.Screen 
          name = "Profile"
          component ={Profile}
          />
          
      </Tab.Navigator>


  );
}