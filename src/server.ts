import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import schema from './modules/index'
import { newMongoConnect } from './config/index'
async function main() {
   await newMongoConnect('mongodb://127.0.0.1:27017/homwork')
  const server = new ApolloServer({
     schema
  })

  const { url } = await startStandaloneServer(server)
  console.log(`🚀 Server ready at ${url}`)
}
main()
