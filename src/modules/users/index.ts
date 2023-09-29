import { resolvers } from './resolvers'
import fs from 'fs'
import path from 'path'

const typeDefs = fs.readFileSync(
  path.join(process.cwd(), 'src', 'modules', 'users', 'schema.gql'),
  'utf8',
)

export default { resolvers, typeDefs }
