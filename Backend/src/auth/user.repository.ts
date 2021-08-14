import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { SignUp } from "./dto/signup.dto";
import {hash} from 'bcrypt';
import {genSalt} from 'bcrypt';
import { Login } from "./dto/login.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    async SignUp(signup : SignUp){
        const {fname, lname, email, password,} = signup;

        let user = new User();
        user.email = email;
        user.fname = fname;
        user.lname = lname;
        user.salt = await genSalt();
        user.password = await this.hashPassword(password, user.salt);

        try{
            await user.save();
        }catch(error){
            if(error.code === '23505'){
                throw new ConflictException('Username already exists');
            }else{
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(login : Login):Promise<string>{
        const {email, password} = login;
        const user = await this.findOne({email});

        if(user && await user.validatePassword(password)){
            return user.email;
        }else{
            return null;
        }
    }

    private async hashPassword(password : string, salt: string):Promise<string>{
        return hash(password,salt);
    }

}