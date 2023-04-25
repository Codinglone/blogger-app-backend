import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { UserPayload } from "../utils/interfaces";
const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt")

export class AccountCreationApi {
    static async createUser(payload: UserPayload): Promise<any> {
        const userRepository = AppDataSource.getRepository(User)
        
    }
}


