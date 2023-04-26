import { Type as T } from "@sinclair/typebox";

const loginSchema = T.Object({
    email: T.String(),
    password: T.String(),
})