import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main (): Promise<void> { void undefined }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
