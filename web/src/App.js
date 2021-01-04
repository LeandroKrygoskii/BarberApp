import React , {useState , FormEvent} from 'react';
import { Input, InputArea , Btn } from './style.js';
import './App.css';

import Api from './API';
import api from './services/api';

function App() {


  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  
  const handleClick = async (e) =>{
    e.preventDefault();
   
    let res = await api.cadastro(name, email, password)
    
    console.log(res)
  } 
 

    
  

  return (
    <div className="App">
      

      
      <InputArea onSubmit={handleClick}>
         <Input
         type="text"
          placeholder={"nome"}
          placeholderTextColor="#000" 
          onChange={event => setName(event.target.value)}
          value={name}
         />

        <Input
          type="text"
          placeholder={"email"}
          placeholderTextColor="#000"          
          onChange={event => setEmail(event.target.value)}
          value={email}
         />


        <Input
          type="text"
          placeholder={"password"}
          placeholderTextColor="#000"       
          onChange={event => setPassword(event.target.value)}
          value={password}
         />

         <Btn  type="submit">
             Confirmar
         </Btn>
      </InputArea>
     
    </div>
  );
}

export default App;
