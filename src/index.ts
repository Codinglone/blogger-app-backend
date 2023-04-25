import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
const fastify = require('fastify')({ logger: true })



AppDataSource.initialize().then(async () => {
    const start = async () => {
        try {
          await fastify.listen({ port: 3000 })
        } catch (err) {
          fastify.log.error(err)
          process.exit(1)
        }
      }
      start()
    console.log("Connected!")

}).catch(error => console.log(error))
