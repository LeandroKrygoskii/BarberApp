import { NextFunction, Request , Response} from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/Users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserView from '../views/UserViews';

export default {
     
    //LEMBRAR DE COLOCAR O 'SECRET' EM UMA VARIAVEL LOCAL!!!
    


    async  checkToken(request : Request , response : Response) {
         
        return response.status(200).send({userId : request.userId , name: request.name , token : request.token})
    },

    //cria um novo usuário
    async create(request : Request , response : Response){
        const {
            name,
            email,
            password
        } = request.body;
       
        const userRepository = getRepository(Users)

        const userExist = await userRepository.findOne({where: { email }});

        if(userExist){
            return response.sendStatus(409);
        }
        //cria o repositorio 
        const user=userRepository.create({
           name,
           email,
           password,
        });
        
        await userRepository.save(user)
        return response.status(201).json(user)
    },
   

    //autentificação do usuário
    async login(request : Request , response : Response){
         
        const {
            email,
            password
        } = request.body;
 
        const userRepository =  getRepository(Users)
 
        const user = await userRepository.findOne({where: { email }}); 

        if(!user) {
            return response.sendStatus(401);
        }

        const isValuePass = await bcrypt.compare(password , user.password);

        if(!isValuePass){
            return response.sendStatus(401);
        } 
         

        const token = jwt.sign({id : user.id , name : user.name}, 'secret' , {expiresIn : '8h'})
        
        //delete user.password;
        
        return response.json({
                user : UserView.render(user),
                token : token,      
        })

    }

}

// Verifica se ja tem o token
// async function verifyJWT(req : Request, res : Response, next: NextFunction){
//     var token = req.headers['x-access-token'];
//     if (!token) return res.status(401).send({ message: 'No token provided.' });

//     const userRepository =  getRepository(Users)
 
//     const user = await userRepository.findOne({where:{ email }})
    
//     jwt.verify({token: user}, 'secret', function(err, decoded) {
//       if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
//       // se tudo estiver ok, salva no request para uso posterior
//       req.userId = decoded.id;
//       next();
//     });
//   }