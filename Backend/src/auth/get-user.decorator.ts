import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./user.entity";




 export const GetUser = createParamDecorator(async(data, ctx: ExecutionContext):Promise<User> =>{
    const request = ctx.switchToHttp().getRequest();
    // console.log(request);
    // console.log(request.user);
    return request.user
});