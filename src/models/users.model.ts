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
                oneUser[0].password
            )

            if(!isPasswordMatching){
                return { message: 'Password entered are not matching ! try again' }
            }

            else {
                const token = jwt.sign(
                    {
                        email: oneUser[0].email,
                        fullName: oneUser[0].fullName,
                        id: oneUser[0].id,
                        role: oneUser[0].role
                    },
                    process.env.JWT_KEY
                )
                return { token }
            }
        }
    }

    
}


