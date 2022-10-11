import { Body, Controller, Get, Post, Param , Patch , Delete } from "@nestjs/common";

import { UsersService } from "./users.service";

@Controller('users')
export class UserController{
    constructor( private readonly userService:UsersService){}



@Post()
insertUser(
    @Body('name') name:string, 
    @Body('email') email:string, 
    @Body('contact') contact:number, 
  
){

  const userId  =this.userService.insertUser(name , email, contact);
     return userId;
}


@Get()
getAllUsers(){
    return this.userService.getUsers();
}

@Get(':userId')
getUser(@Param('userId') userId: string)
{
    return this.userService.getUser(userId);
}
   @Patch(':userId')
   updateUser(
    @Param('userId') userId:string,
    @Body('name') name:string,
    @Body('email') email:string,
    @Body('contact') contact: number,
   ){
       this.userService.updateUser(userId, name , email , contact);
          return null;
    }


   @Delete(':userId')
   deleteUser(@Param('userId') userId:string){
    this.userService.deleteUser('userId');
    return null;
   }
}
