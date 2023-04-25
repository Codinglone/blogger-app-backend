import { postUserOpts } from "../schemas/user_schema";
import { bloggerRoutes } from "../utils/enums";


const userRoutes = (fastify, opts, done) => {
    fastify.post(`${bloggerRoutes.ACCOUNT_CREATION}`, postUserOpts)
    done()
}

module.exports = userRoutes