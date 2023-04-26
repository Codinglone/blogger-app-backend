import { AccountCreationApi } from "../models/users.model";

export const createAccountController = async (req, reply) => {
    try {
        const response = await AccountCreationApi.createUser(req.body)
        reply.code(201).send(response)
    } catch (error) {
        reply.code(204).send(error)
    }
}

export const getAccountsController = async (req, reply) => {
    try {
        const response = await AccountCreationApi.getUsers()
        reply.code(200).send(response)
    } catch (error) {
        reply.code(404).send(error)
    }
}

