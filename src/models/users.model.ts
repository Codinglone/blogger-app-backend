import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { UserPayload, loginPayload } from "../utils/interfaces";
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

    static loginUser = async (payload: loginPayload): Promise<any> => {
        const email = payload.email 
        const password = payload.password 
        const oneUser = await userRepository.findOneBy({
            email,
        })

        if(!oneUser){
            return { message: `Email ${email} Doesn't exists` }
        }
        else {
            const isPasswordMatching: boolean = await bcrypt.compare(
                password,
                oneUser.password
            )

            if(!isPasswordMatching){
                return { message: 'Password entered are not matching ! try again' }
            }

            else {
                const token = jwt.sign(
                    {
                        email: oneUser.email,
                        firstName: oneUser.firstName,
                        lastName: oneUser.lastName,
                        id: oneUser.id,
                        role: oneUser.role
                    },
                    process.env.JWT_KEY
                )
                return { token }
            }
        }
    }

    
}


