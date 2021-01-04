import{ ErrorRequestHandler } from 'express'
import { ValidationError } from 'yup';





interface ValidationErrors{
    [key: string]: string[];
}




const errorHandler: ErrorRequestHandler = (error, request, response, next) =>{
   
    console.log(error)

    return response.status(500).json({message: 'Internal Server Error'});

};

export default errorHandler;