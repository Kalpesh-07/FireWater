import { IsString, MinLength, MaxLength, Matches } from "class-validator";

export class SignUp{
        @IsString()
        fname : string;
        
        @IsString()
        lname : string;
    
        @IsString()
        @MinLength(4)
        @MaxLength(20)
        email : string;
    
        @IsString()
        @MinLength(4)
        @MaxLength(20)
        // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ ,{ message : 'Password is too weak'})
        password : string;
}