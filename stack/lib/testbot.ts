import db from './db'
import { getMessagesList, getMessageById, deleteMessageById } from './google'

export const getTestbotSigninUrl: () => Promise<string> = async () => {
  const messages = await getMessagesList()
  if (messages.messages != null) {
    const messageId = messages.messages[0].id
    const message = await getMessageById(messageId)
    const decoded = Buffer.from(message.payload.body.data, 'base64').toString()
    // eslint-disable-next-line @typescript-eslint/quotes
    const url = decoded.split(`"`)[1]
    await deleteMessageById(messageId)
    return url
  } else {
    await new Promise(resolve => setTimeout(resolve, 5000))
    return (await getTestbotSigninUrl().catch(console.error)) as string
  }
}

export const deleteTestbotUser: () => Promise<null> = async () => {
  await db?.user
    .delete({
      where: { email: process.env.TESTBOT_EMAIL }
    })
    .catch((e: Error) => console.error(e))
  return null
}
