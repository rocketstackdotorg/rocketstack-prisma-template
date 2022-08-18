import { getSession } from 'next-auth/react'
import { NextApiHandler } from 'next'
import db from '../../lib/db'
import { serverSideQuery } from '../../lib/query'
import { getUserByEmail, updateUser, deleteUser } from '../../lib/user'

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req })
  const body = JSON.parse(req.body)
  if (session == null) {
    res.status(401).send('Unauthorized')
  } else {
    const user = await getUserByEmail(session?.user?.email ?? '')
    if (user?.id != null) {
      switch (body.action) {
        case 'updateUser':
          await serverSideQuery(updateUser(body.data), res)
          break
        case 'deleteUser':
          await serverSideQuery(deleteUser(user.id, body.userId), res)
          break
        default:
          res.status(400).send('Bad Request')
      }
    } else {
      res.status(401).send('Unauthorized')
    }
    await db?.$disconnect()
  }
}

export default handler
