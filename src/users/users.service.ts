import { Injectable , NotFoundException } from '@nestjs/common';
import { User } from './users.model';
import {v4 as  uuidv4}  from 'uuid';
;
@Injectable()
export class UsersService {
    private users: User[] = [];

    insertUser(name: string  ,  email:string, contact : number )
{
    const id = uuidv4()
    const newUser = new User(id , name , email , contact);
    this.users.push(newUser);
    return  id;
}

    getUsers(){
        return [...this.users];
    }

   getUser(id:string){
    return this.getUserById(id)[0];
   
   }
   updateUser(userId:string, name:string , email:string, contact:number)
   {
     const[targetUser, index] = this.getUserById(userId);
        
//      const newUserParams={...targetUser , name , email, contact};
    
//     const  newUser = new User(userId , newUserParams.name , newUserParams.email, newUserParams.contact);
//     this.users[index]= newUser;
//    return newUser;
const updateUser = {...targetUser};

      
if(name){
   updateUser.name =name
 }
 if(email){
   updateUser.email=email
    }

    if(contact){
      updateUser.contact = contact
    };

    this.users[index]=updateUser;

}
 

 deleteUser(id:string ){
    const index= this.getUser(id)[1];
    this.users.splice(index, 1 );
 }

   private getUserById(id:string):[User, number]{
   const userIndex=  this.users.findIndex(u=> u.id===id);
   const user = this.users[userIndex];
   if(!user){
      throw new NotFoundException('Not find your Details');
   }
   return [user,userIndex];
}
}
  



