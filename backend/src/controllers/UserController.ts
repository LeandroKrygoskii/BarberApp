import { NextFunction, Request , Response} from 'express';
import { getRepository } from 'typeorm';
import Users from '../models/Users';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserView from '../views/UserViews';
import Barbers from '../models/Barber';
import BarberView from '../views/BarberView';
import * as Yup from 'yup';

export default {
     
    //LEMBRAR DE COLOCAR O 'SECRET' EM UMA VARIAVEL LOCAL!!!
    


    async  checkToken(request : Request , response : Response) {
         
        return response.status(200).send({userId : request.userId , name: request.name , token : request.token})
    },
    
    async createBarber(request : Request , response : Response) {
        const {
            name,
            stars,
        } = request.body;    
        
        const barberRepository = getRepository(Barbers)

         /// Para Guardar a imagem no DB/////
         const requestImages = request.files as Express.Multer.File[];
         const images = requestImages.map(image => {
              return { path : image.filename}
          })


          const data = {
            name,
            stars,
            images,
        };
       
        //validacao
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            stars : Yup.number().required(),
            images: Yup.array(
                Yup.object().shape({
                 path: Yup.string().required()
              })      
            )
        });

        await schema.validate(data, {
            abortEarly: false,
        })
        
        console.log(data)
    
        const barber = barberRepository.create(data);

        await barberRepository.save(barber)
        return response.status(201).json(barber)
    },



    //cria um novo usuário
    async create(request : Request , response : Response){
        console.log(request.files);
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
    
    //mostra todos os barbeiros barbeiro 
    async show(request : Request , response : Response ) {
         
        const barberRepository = getRepository(Barbers)

        const barbers = await barberRepository.find({
            relations: ['images']
        })

        return response.json(BarberView.renderMany(barbers))
    }, 
    
    //mostrar dados do barbeiro pelo ID
    async index(request : Request , response : Response ) {
         
        const { id } = request.params;

        const userRepository = getRepository(Barbers) 

        const user = await userRepository.findOneOrFail(id)
       
        return response.json(BarberView.render(user))
        
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
           
        return response.json({
                user : UserView.render(user),
                token : token,      
        })

    }

}

