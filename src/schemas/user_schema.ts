import { Type as T } from "@sinclair/typebox";
import { createAccountController, getAccountsController } from "../controllers/create_account_controller";
import checkauth from "../middlewares/checkauth";

export const getUserSchema = T.Object({
    id: T.Number(),
    firstName: T.String(),
    lastName: T.String(),
    email: T.String(),
    password: T.String(),
    role: T.String(),
    phone: T.String(),
    createdAt: T.String(),
    updatedAt: T.String()
})

export const accountSchema = T.Object({
    firstName: T.String(),
    lastName: T.String(),
    email: T.String(),
    role: T.String(),
    phone: T.String(),
    password: T.String(),
})

export const postUserOpts = {
    schema: {
        body: T.Strict(accountSchema),
        response: {
            201: getUserSchema
        }
    },
    handler: createAccountController
}

export const getUsersOpts = {
    schema: {
        response: {
            200: T.Array(getUserSchema)
        }
    },
    preHandler: checkauth,
    handler: getAccountsController
}


