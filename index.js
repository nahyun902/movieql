import { GraphQLServer } from 'graphql-yoga'
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
  typeDefs: 'graphql/schema.graphql',
  resolvers // resolvers:resolvers 이랑 같음
})

server.start(() => console.log('GraphQL Server Running'))