import "reflect-metadata";
import {createConnection} from "typeorm";
import { UserService } from "./service/UserService";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    
    const userService = new UserService();
    
    const user = userService.create();
    
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    user.email = "teste@teste.com";
    
    await userService.save(user);

    console.log("Saved a new user with id: " + user.id);
    
    console.log("Loading users from the database...");
    const users = await userService.findAll();
    
    console.log("Loaded users: ", users);
    
    
}).catch(error => console.log(error));
