require("dotenv").config()
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
const fastify = require('fastify')({ logger: true })
const PORT = process.env.PORT || 7500

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

fastify.register(require("./routes/create_account_routes"), {
    prefix: "api/v1"
})




AppDataSource.initialize().then(async () => {
    console.log("Connected!")

}).catch(error => console.log(error))

const start = async () => {
    try {
      await fastify.listen({ port: PORT })
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()