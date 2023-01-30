// import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
// import GithubProvider from 'next-auth/providers/github'
import Auth0Provider from 'next-auth/providers/auth0'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { NuxtAuthHandler } from '#auth'
const prisma = new PrismaClient()
export default NuxtAuthHandler({
  // session: {
  //   strategy: 'jwt'
  // },

  adapter: PrismaAdapter(prisma),
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    Auth0Provider.default({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER
    }),
    // @ts-expect-error
    GithubProvider.default({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
})
// function authorize (prisma: PrismaClient) {
//   return async (
//     credentials: Record<'email' | 'password', string> | undefined
//   ) => {
//     if (!credentials) { throw new Error('Missing credentials') }
//     if (!credentials.email) { throw new Error('"email" is required in credentials') }
//     if (!credentials.password) { throw new Error('"password" is required in credentials') }
//     const maybeUser = await prisma.user.findFirst({
//       where: { email: credentials.email },
//       select: { id: true, email: true, password: true }
//     })
//     if (!maybeUser || !maybeUser.password) { return null }
//     // verify the input password with stored hash
//     const isValid = await compare(credentials.password, maybeUser.password)
//     if (!isValid) { return null }
//     return { id: maybeUser.id, email: maybeUser.email }
//   }
// }
