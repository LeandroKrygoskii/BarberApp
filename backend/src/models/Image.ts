import { Entity , Column , PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Barber from './Barber';
@Entity('images')
export default class Image {
 @PrimaryGeneratedColumn('increment')   
 id: number;

 @Column()
 path: string;
 
 
 @ManyToOne(() => Barber, barber => barber.images)
 @JoinColumn({name : 'barber_id'})
 barber_img: Barber;
 


}