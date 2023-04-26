import { postUserOpts, getUsersOpts } from "../schemas/user_schema";
import { bloggerRoutes } from "../utils/enums";


const userRoutes = (fastify, opts, done) => {
    fastify.post(`${bloggerRoutes.ACCOUNT_CREATION}`, postUserOpts)
    fastify.get(`${bloggerRoutes.ACCOUNT_CREATION}`, getUsersOpts)
    done()
}

module.exports = userRoutes