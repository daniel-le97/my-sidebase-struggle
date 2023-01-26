// import { prisma } from "@prisma/client"

export default defineEventHandler((event) => {
  // add adding to product database handling here
  const hi = event.context.prisma
  console.log(hi)
})
