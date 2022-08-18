import { NextApiResponse } from 'next'
import { catcher } from './errors'

const clientSideQuery: (body: unknown) => Promise<any | null> = async body =>
  await fetch('/api', {
    method: 'POST',
    body: JSON.stringify(body)
  })
    .then(async res => (res?.status === 200 ? await res.json() : null))
    .catch(catcher)

export default clientSideQuery

export const serverSideQuery: (
  dbCall: Promise<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void | Record<string, unknown> | null | undefined | unknown[]
  >,
  res: NextApiResponse
) => Promise<unknown> = async (dbCall, res) =>
  await dbCall
    .then(data =>
      Array.isArray(data) || data?.id != null
        ? res.json(data)
        : res.status(204).end()
    )
    .catch(e => catcher(e, '', e => res.status(500).send(e)))

export const parseQueryString: (
  url: string
) => Record<string, string> = url => {
  const query: Record<string, string> = {}
  const queryString = url?.split('?')[1]
  const pairs = (queryString?.[0] === '?'
    ? queryString.slice(1)
    : queryString
  )?.split('&')
  for (let i = 0; i < pairs?.length; i++) {
    const pair = pairs?.[i]?.split('=')
    query[decodeURIComponent(pair?.[0])] = decodeURIComponent(pair?.[1] ?? '')
  }
  return query
}
