import { Entity , Column , PrimaryGeneratedColumn , BeforeInsert, BeforeUpdate, OneToMany, JoinColumn} from 'typeorm';
import Image from './Image';
import bcrypt from 'bcryptjs';

@Entity('users')
export default class Users {
 @PrimaryGeneratedColumn('increment')   
 id: number;

 @Column()
 name: string;
 
 @Column()
 email: string;

 @Column()
 password: string;
 
 


 @BeforeInsert()
 @BeforeUpdate()
 hashPassword() {
     this.password = bcrypt.hashSync(this.password, 8);
 }
}