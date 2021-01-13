import React , {useState , FormEvent } from 'react';
import { Input, InputArea , Btn } from './styles/styleCad.js';
import './App.css';

import api from './services/api';

function App() {

  const [name , setName] = useState('');
  const [stars , setStar] = useState(0);
  const [images, setImages]= useState([]);

  
  
  const handleClick = async (e) =>{
    e.preventDefault();  
  } 


  function handleSelectImage(event){
    console.log(event)
    if(!event.target.files){
        return;
    }
    
    //const selectedImages = Array.from(event.target.files)

    setImages(event.target.files);
  }

 async function handleCreateBarber(event) {
     
     const data = new FormData();

     data.append('name', name);
     data.append('stars', stars);
     
     Array.from(images).forEach(image => {
       data.append('images', image)
     });
     

    await api.post('barber', data)

    alert('cadastro com sucesso')
  }


  console.log(setImages)
    console.log(images)

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
          placeholder={"nota"}
          placeholderTextColor="#000"          
          onChange={event => setStar(event.target.value)}
          value={stars}
         />

        <Input
         type="file"
         multiple
         onChange={handleSelectImage}
         
        />

         <Btn 
          type="submit"
          onClick={handleCreateBarber}
          >
             Confirmar
         </Btn>
      </InputArea>
        
    </div>
  );
}

export default App;
