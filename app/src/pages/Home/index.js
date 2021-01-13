import React , { useState , useEffect } from 'react';
import {  Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { request , PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';


import { Container ,
    Scroller ,
    HeaderArea ,
    HeaderTitle, 
    SearchButton,
    LocationInput,
    LocationArea,
    LocationFinder,
    LoadingIcon,
    ListArea,
   } from './style.js';

import {Text} from 'react-native';
import api from '../../services/api';

import SearchIcon from '../../images/search.svg';
import MyLocationIcon from '../../images/my_location.svg';

import BarberItem from '../../components/BarberItem';


export default function Home() {
  
  const [locationText, setLocationText] = useState('');
  const [coords , setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const navigation = useNavigation();
  
  const handleLocationFinder = async () => {
        setCoords(null);
       let resultPermission = await request(
         Platform.OS === 'ios' ? 
           PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
           :
           PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION 
       );
       
       if(resultPermission == 'granted') {
        
        setLoading(true);
        setLocationText('');
        setList([]);

        Geolocation.getCurrentPosition((info) => {
           setCoords(info.coords);
           getBarbers();
        })

       }
 
  }


   const getBarbers = async () => {
      
    setLoading(true);
    setList([]);


    let res = await api.getBarbers();
    
    if(res != '') {     
      console.log(res)
      setList(res);

    } else{
      alert("erro:" + res.error);
    }
    setLoading(false);
  }

  useEffect(() => {
       getBarbers();
  }, []); 


 return (
   <Container>
         <Scroller>

           <HeaderArea>
             <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro Favorito</HeaderTitle>
             <SearchButton onPress ={() => navigation.navigate('Search')}>
               <SearchIcon width="26" height="26" fill="#FFFFFF" />
             </SearchButton>
           </HeaderArea>

           <LocationArea>
             <LocationInput 
               placeholder="Onde você está?"
               placeholderTextColor="#FFFFFF"
               value={locationText}
               onChangeText={t => setLocationText(t)}
             />
             <LocationFinder onPress={handleLocationFinder}>
               <MyLocationIcon width="24" height="24" fill="#FFFFFF" />
             </LocationFinder>
           </LocationArea>
          
          {loading &&
              <LoadingIcon size="large" color="#FFFFFF" />
          }
          
          <ListArea>
            {list.map( (item, k)=>(
               <BarberItem key={k} data={item} />
            ))}
          </ListArea>

            
         </Scroller>
   </Container>
  );
}