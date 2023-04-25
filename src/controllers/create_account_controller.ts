import { AccountCreationApi } from "../models/users.model";

export const createAccountController = async (req, reply) => {
    try {
        const response = AccountCreationApi.createUser(req.body)
        reply.code(201).send(response)
    } catch (error) {
        reply.code(204).send(error)
    }
}

