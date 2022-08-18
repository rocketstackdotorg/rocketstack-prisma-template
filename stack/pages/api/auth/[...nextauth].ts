import NextAuth, { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import { NextApiHandler, NextApiRequest } from 'next'
import cuid from 'cuid'
import { getUserByEmail } from '../../../lib/user'
import {
  _sendMail,
  getEmailTemplateByName,
  EmailTemplate
} from '../../../lib/email'

const prisma = new PrismaClient()

const auth: NextApiHandler = (req, res) => NextAuth(req, res, authOptions(req))

export default auth

export const authOptions: (req: NextApiRequest) => NextAuthOptions = req => {
  const currentPage = req.rawHeaders.find(
    header => header.slice(0, 4) === 'http'
  )
  const currentLang = currentPage?.split('/')[3]

  return {
    adapter: PrismaAdapter(prisma),
    providers: [
      EmailProvider({
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
        from: process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? '',
        sendVerificationRequest: async ({ identifier: to, url }) => {
          const template = getEmailTemplateByName(EmailTemplate.SIGNIN, { to, url })
          if (template?.html != null) {
            await _sendMail(to, template.subject, template.html)
          }
        }
      })
    ],
    callbacks: {
      session: async ({ session, token, user }) => {
        const _user = await getUserByEmail(user.email ?? '')
        if (_user != null) session.user = _user
        session.nonce = cuid()
        return session
      },
      redirect: ({ url }) =>
        url.includes('success=true')
          ? url
          : `${url}${url.includes('?') ? '&' : '?'}success=true`
    },
    pages: {
      verifyRequest: `${currentPage ??
        process.env.NEXT_PUBLIC_HOST_URL ??
        ''}?confirmEmail=true`,
      newUser: `/${currentLang ?? 'en'}/start${
        req?.query?.invite === 'true' ? '?invite=true' : ''
      }`
    }
  }
}
