require("dotenv").config()
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
const fastify = require('fastify')({ logger: true })
const PORT = process.env.PORT || 7000

fastify.register(require("@fastify/swagger"), {
    exposeRoute: true,
    routePrefix: "api-docs",
    swagger: {
        info: { 
            title: "Blogger-Docs",
            version: "1.0.0",
            description: "Basic blogging app backend with authentication"

         }
    }
})




AppDataSource.initialize().then(async () => {
    const start = async () => {
        try {
          await fastify.listen({ port: PORT })
        } catch (err) {
          fastify.log.error(err)
          process.exit(1)
        }
      }
      start()
    console.log("Connected!")

}).catch(error => console.log(error))
