import React , {useContext} from 'react';
//import { View } from 'react-native';
import { TabArea , TabItem ,TabItemCenter, NameUser} from './style.js';

import { UserContext } from '../../contexts/userContext';
import HomeIcon from '../../images/home.svg';
import SearchIcon from '../../images/search.svg';
import TodayIcon from '../../images/today.svg';
import FavoriteIcon from '../../images/favorite.svg';
import AccountIcon from '../../images/account.svg';
import {useNavigation} from '@react-navigation/native';



export default ({state}) => {

  const { state : user} = useContext(UserContext)
  
  const navigation = useNavigation();

  const goTo = (namePages) => {
    navigation.navigate(namePages)
  }

    
  

 return (
   <TabArea>
     <TabItem onPress={() =>  goTo('Home') }>
        <HomeIcon style={{opacity: state.index===0 ? 1 : 0.5}} width="24" heigh="24" fill="#FFFFFF" />     
     </TabItem>


     <TabItem onPress={() => goTo('Search')}>
       <SearchIcon style={{opacity: state.index===1 ? 1 : 0.5}} width="24" heigh="24" fill="#FFFFFF" />
     </TabItem>


     <TabItemCenter onPress={() => goTo('Appointments')}>
       <TodayIcon width="32" heigh="32" fill="#4EADBE" />
     </TabItemCenter>


     <TabItem onPress={() => goTo('Favorites')}>
       <FavoriteIcon style={{opacity: state.index===3 ? 1 : 0.5}} width="24" heigh="24" fill="#FFFFFF" />
     </TabItem>


     <TabItem onPress={() => goTo('Profile')}>
       {user.name != '' ? 
            <NameUser>{user.name}</NameUser>
            :
            <AccountIcon style={{opacity: state.index===4 ? 1 : 0.5}} width="24" heigh="24" fill="#FFFFFF" />
      }
       
     </TabItem>

   </TabArea>
  );
}