import { Type as T } from "@sinclair/typebox";
import { loginController } from "../controllers/create_account_controller";

const loginSchema = T.Object({
    email: T.String(),
    password: T.String(),
})

const loginOpts = {
    schema: {
        body: T.Strict(loginSchema),
        response: {
            200: loginSchema
        }
    },
    handler: loginController
}

export { loginOpts }