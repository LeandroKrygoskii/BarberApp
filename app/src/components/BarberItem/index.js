import React from 'react';
import { Area,Avatar,InfoArea,UserName,PerfilButtom,PerfilButtomText} from './style.js';

export default function BarberItem({data}) {
 return (
   <Area>
     
      <Avatar source={{uri: 'http://localhost:3333/uploads/1610500541292-cue.jpg'}}/>

      <InfoArea>
          <UserName>{data.name}</UserName>

          <PerfilButtom>
              <PerfilButtomText>Ver Perfil</PerfilButtomText>
          </PerfilButtom>
      </InfoArea>

   </Area>
  );
}