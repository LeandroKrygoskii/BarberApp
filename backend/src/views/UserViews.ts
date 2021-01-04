import User from '../models/Users';

export default {

    render(user : User){
        return {
            id : user.id,
            email: user.email,
            name : user.name
        }        
    }

}