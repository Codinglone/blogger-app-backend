import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { UserPayload } from "../utils/interfaces";
const jwt = require("jsonwebtoken")

const bcrypt = require("bcrypt")

const userRepository = AppDataSource.getRepository(User)
export class AccountCreationApi {
    static async createUser(payload: UserPayload): Promise<any> {
        const email = payload.email 
        const oneUser = await userRepository.findOneBy({
            email,
        })

        if(!oneUser){
            const user = new User()
            const hashedPassword  = await bcrypt.hash(payload.password, 10)

            return userRepository.save({
                ...user,
                ...payload,
                password: hashedPassword
            })
        }

        else {
            return {
                message: `${payload.email} Already exists , Try new one`
            }
        }
    }


    static getUsers = async (): Promise<any> => {
        return userRepository.find({
            order: {
                id: 'DESC'
            }
        })
    }
}


