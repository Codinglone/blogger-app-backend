import { bloggerRoutes } from "../utils/enums";
import { loginOpts } from "../schemas/login_schema";

const loginRoutes = (fastify, opts, done) => {
    fastify.post(`${bloggerRoutes.USER_LOGIN}`, loginOpts)
    done()
}

module.exports = loginRoutes