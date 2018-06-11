import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import {IsDate} from "class-validator";
@Entity()
export abstract class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsDate()
    createDate: Date;

}
