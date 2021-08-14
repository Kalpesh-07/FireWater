import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUp } from './dto/signup.dto';
import { Login } from './dto/login.dto';
import { UserRepository } from './user.repository';
import { EntityRepository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { User } from './user.entity';
@Injectable()
export class AuthService {
    [x: string]: any;
    constructor(
        @EntityRepository(UserRepository)
        private userRepository : UserRepository,
        private jwtService : JwtService
    ){}

    async signUp(signup : SignUp):Promise<void>{
        return this.userRepository.SignUp(signup);
    }

    async signIn(login : Login):Promise<{user : { id : number,fname : string, lname: string, email : string}, accessToken : string}>{
        const email = await this.userRepository.validateUserPassword(login);
        
       
        
        if(!email){
            throw new UnauthorizedException('Invalid Credentials!!!');
        }
        const user = await this.userRepository.findOne({where : { email : email}});
       
        
        const payload  = { email };
        const accessToken = await this.jwtService.sign(payload);
        const res = {
            user : {
                id : user.id,
                fname : user.fname,
                lname : user.lname,
                email : user.email
            },
            accessToken : accessToken
        }
        return res;
    }
}
