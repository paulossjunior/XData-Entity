import { User } from "../model/User";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../repository/UserRepository";

export class UserService{
    
    private userRepository: UserRepository = getCustomRepository(UserRepository);
    
    public create (){
        let user = this.userRepository.create();
        user.createDate = new Date();
        return user;
    }
    
    public async save(user:User){
        await this.userRepository.save(user); 
    }

    public async findAll(){
        return await this.userRepository.find();
    }

    

}