
 const cadastro= async (name, email, password) => {
    const requestOptions = {
        method : 'POST',
        Accept: 'application/json',
        headers : {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email , password})
      }
      const req = await fetch('http://localhost:3333/cadastro' , requestOptions)
    
      const data = await req.json();

      return data;
    };


module.exports = {
    cadastro
}
