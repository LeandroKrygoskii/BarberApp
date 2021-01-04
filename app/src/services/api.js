const checkToken = async (token) => {
   
  const requestOptions = {
    method : 'POST',
    Accept: 'application/json',
    headers : {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  
    },
    //body : JSON.stringify({token})
  }
  const req = await fetch('http://192.168.15.6:3333/auth/refresh', requestOptions)

  const data = await req.json();

  return data;

};

const cadastro= async (name, email, password) => {
  const requestOptions = {
      method : 'POST',
      Accept: 'application/json',
      headers : {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email , password})
    }
    const req = await fetch('http://192.168.15.6:3333/cadastro' , requestOptions)
  
    const data = await req.json();

    return data;
  };

  const login = async ( email, password ) => {
     const requestOptions = {
       method : 'POST',
       headers : {
        Accept: 'application/json',
        'Content-Type': 'application/json'
       },
       body : JSON.stringify({email, password})
     }
    
     const req = await fetch('http://192.168.15.6:3333/auth', requestOptions)
    
     const data = await req.json();

     return data;

  }

module.exports = {
  cadastro,
  login,
  checkToken
}
