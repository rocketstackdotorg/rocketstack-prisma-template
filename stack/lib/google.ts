import { JWT } from 'google-auth-library'
import { Buffer } from 'buffer'

interface GmailMessage {
  id: string
  payload: { body: { data: WithImplicitCoercion<string> }}
}
interface GmailResponse { messages: GmailMessage[] }

const getClient: () => JWT = () =>
  new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: Buffer.from(
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY as string,
      'utf-8'
    )
      .toString('utf-8')
      .replaceAll('\\n', '\n'),
    scopes: ['https://mail.google.com/'],
    subject: process.env.GOOGLE_CLOUD_EMAIL
  })

export const getMessagesList: () => Promise<GmailResponse> = async () => {
  const client = getClient()
  await client.authorize()
  const url = `https://gmail.googleapis.com/gmail/v1/users/${process.env
    .GOOGLE_CLOUD_EMAIL as string}/messages?q='from:${process.env
    .NEXT_PUBLIC_COMPANY_EMAIL as string}'`
  const res = await client.request({ url })
  return res.data as GmailResponse
}

export const getMessageById: (id: string) => Promise<GmailMessage> = async id => {
  const client = getClient()
  await client.authorize()
  const url = `https://gmail.googleapis.com/gmail/v1/users/${process.env
    .GOOGLE_CLOUD_EMAIL as string}/messages/${id}`
  const response = await client.request({ url })
  return response.data as GmailMessage
}

export const deleteMessageById: (id: string) => Promise<void> = async id => {
  const client = getClient()
  await client.authorize()
  const url = `https://gmail.googleapis.com/gmail/v1/users/${process.env
    .GOOGLE_CLOUD_EMAIL as string}/messages/${id}/trash`
  await client.request({ url, method: 'POST' }).catch(e => console.error(e))
}
