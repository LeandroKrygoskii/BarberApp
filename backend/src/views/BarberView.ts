import Barber from '../models/Barber';
import imagesView from '../views/ImagesView';

export default{


    render(barber : Barber){
       const an =  imagesView.renderMany(barber.images);

       console.log(an)
    
        return{
           
                id: barber.id,
                name: barber.name,
                // stars: barber.stars,
                images: imagesView.renderMany(barber.images)
                    
        }

    },

    renderMany(barbers : Barber[]) {
        return  barbers.map(barber => this.render(barber));
        
         //return barbers.map(barber => this.render(barber));
         
    } 
}