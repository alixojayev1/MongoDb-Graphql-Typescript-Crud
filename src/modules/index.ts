import {makeExecutableSchema} from '@graphql-tools/schema'

import user from './users/index'

export default  makeExecutableSchema({
    typeDefs:[user.typeDefs],
    resolvers:[user.resolvers]
})