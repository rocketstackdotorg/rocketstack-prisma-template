// @todo Remove theme from design-system.
import { theme } from '@organigram/design-system/theme'
import type { PrismaClient } from '@prisma/client'
import type { UserWithRelations } from './types'

declare global {
  // https://pris.ly/d/help/next-js-best-practices
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined

  declare namespace Cypress {
    // interface Chainable {
    //   signIn: () => void
    // }
  }
}

declare module 'next-auth' {
  interface Session {
    user: UserWithRelations
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    palette: theme.palette
    components: theme.components
    shape: theme.shape
    typography: theme.typography
  }
}
