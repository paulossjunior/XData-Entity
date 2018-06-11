import { Repository, EntityRepository } from "typeorm";
import { User } from "../model/User";

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    findByName(firstName: string, lastName: string) {
        return this.findOne({ firstName, lastName });
    }

}