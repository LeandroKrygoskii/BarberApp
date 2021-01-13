import User from '../models/Users';
import ImagesView from './ImagesView';

export default {
  
    render(user : User){
        return {
            id : user.id,
            email: user.email,
            name : user.name,
           // images: ImagesView.renderMany(user.images)
            
        }        
    },
  //  renderMany(user: User[]){
   //     return user.map(user => this.render(user))
  //  }

}