import { BaseEntity, Entity, Column, Unique, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import * as bcrypt from 'bcrypt';


@Entity({name:'users'})
@Unique(['email'])
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    fname : string;

    @Column()
    lname : string;

    @Column()
    email : string;

    @Column()
    password : string;

    @Column()
    salt : string;

   

    async validatePassword(password : string):Promise<boolean>{
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}