import { User } from "../model/User";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../repository/UserRepository";

export class UserService{
    
    userRepository: UserRepository;
    
    constructor(){
        this.userRepository = getCustomRepository(UserRepository);
    }

    create (){
        const user = this.userRepository.create();
        user.createDate = new Date();
        return user;
    }
    
    async save(user:User){
        await this.userRepository.save(user); 
    }

    async findAll(){
        return await this.userRepository.find();
    }

    

}