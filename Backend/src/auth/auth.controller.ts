import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUp } from './dto/signup.dto';
import { Login } from './dto/login.dto';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) signup : SignUp):Promise<void>{
        return this.authService.signUp(signup);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) login : Login):Promise<{user : { id : number,fname : string, lname: string, email : string}, accessToken : string}>{
        return this.authService.signIn(login);
    }
}
