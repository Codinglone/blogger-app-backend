import { Type as T } from "@sinclair/typebox";
import { createAccountController } from "../controllers/create_account_controller";


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



