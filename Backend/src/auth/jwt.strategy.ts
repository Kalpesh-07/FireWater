import {PassportStrategy} from '@nestjs/passport';
import { Strategy ,ExtractJwt} from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';

import { UnauthorizedException, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { JwtPayload } from './jwt-payload.interface';



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(
        @InjectRepository(UserRepository)
        private userRepository : UserRepository
    ){
        super({
            jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey : process.env.JWT_SECRET || 'kp1412',
        });
    }

    async validate(payload : JwtPayload):Promise<User>{
        const { email } = payload;
        const user = this.userRepository.findOne({email});

        if(!user){
            throw new UnauthorizedException();
        }

        return user;
    }
}