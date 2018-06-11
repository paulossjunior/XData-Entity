import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import {IsEmail,IsInt} from "class-validator";

//usando class-valiador
//npm install class-validator --save

@Entity()
export class User extends BaseEntity{

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    @IsInt()
    age: number;
    
    @Column()
    @IsEmail()
    email:string;

}
