import  { ApolloServer, gql } from 'apollo-server';
import { prisma } from "./prisma"
import { app } from "./firebase"
import type { IExecutableSchemaDefinition } from '@graphql-tools/schema';

const typeDefs = gql`
  type User {
    id: Int!
    email: String!
    userName: String!
    avatar: String
  }
  type Query {
    users: [User]
    user(id: Int!): User
    me: User
  }
  `

const resolvers: IExecutableSchemaDefinition["resolvers"] = {
  Query: {
    async users() {
      return prisma.user.findMany({
        select: {
          id: true,
          email: true,
          userName: true,
          avatar: true
        }
      })
    },
    async user (_, args) {
      return prisma.user.findUnique({
        where: {
          id: args.id
        },
        select: {
          id: true,
          email: true,
          userName: true,
          avatar: true
        }
      })
    },
    async me (_, __, ctx) {
      if (!ctx.firebaseUser) return null;

      const { uid, email } = ctx.firebaseUser;

      const userWithFireabseId = await prisma.user.findFirst({
        where: {
          firebaseId: uid
        },
        select: {
          id: true,
          email: true,
          userName: true,
          avatar: true
        }
      })

      if (!userWithFireabseId && email) {
        return prisma.user.upsert({
          where: {
            email
          },
          create: {
            email,
            firebaseId: uid,
            userName: email,
          },
          update: {
            firebaseId: uid
          },
          select: {
            id: true,
            email: true,
            userName: true,
            avatar: true
          }
        })
      }

      return userWithFireabseId
    }
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context(expressCtx) {
    const { req, res } = expressCtx
    const bearer = req.headers.authorization || "" as string

    const token = bearer.split(" ").pop()
    const firebaseUser = token ? await app.auth().verifyIdToken(token) : null

    return {
      firebaseUser
    }
  }
})

server.listen(4000).then(() => console.log("Server has started on http://localhost:4000"))