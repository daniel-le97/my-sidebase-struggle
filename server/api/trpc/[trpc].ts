import { createNuxtApiHandler } from 'trpc-nuxt'

import { createContext } from '~/server/trpc/context'
import { appRouter } from '~~/server/trpc/trpc'
export default createNuxtApiHandler({
  router: appRouter,
  createContext

})
