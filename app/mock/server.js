import { ApolloServer, gql, MockList } from 'apollo-server'
import faker from 'faker'

const typeDefs = gql`
  scalar Name

  type Language {
    code: ID!
    name: Name
  }

  type Query {
    languages: [Language]
  }
`

const mocks = {
  Name: () => faker.address.country(),
  Query: () => ({
    languages: () => new MockList([2, 15]),
  }),
}

const server = new ApolloServer({
  typeDefs,
  mocks,
  playground: true,
})

server.listen(3001).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
