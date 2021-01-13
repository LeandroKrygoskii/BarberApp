import { Entity , Column , PrimaryGeneratedColumn , OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';

@Entity('barbers')
export default class Barbers{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;


    @Column()
    stars: number;

    @OneToMany(()=> Image , image => image.barber_img, {
        cascade: ['insert' , 'update']
    })
    @JoinColumn({name :'barber_id'})
    images: Image[];


}
