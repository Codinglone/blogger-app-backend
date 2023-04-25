import { Type as T } from "@sinclair/typebox";
import { createAccountController } from "../controllers/create_account_controller";


export const accountSchema = T.Object({
    firstName: T.String(),
    lastName: T.String(),
    email: T.String(),
    password: T.String(),
    role: T.String(),
    phone: T.String()
})

export const postUserOps = {
    schema: {
        body: T.Strict(accountSchema),
        response: {
            201: accountSchema
        }
    },
    handler: createAccountController
}



