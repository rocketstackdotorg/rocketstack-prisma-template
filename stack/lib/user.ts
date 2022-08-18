import { atom, SetterOrUpdater, useSetRecoilState } from 'recoil'
import { User } from '@prisma/client'
import db from './db'
import query from './query'
import { UserWithRelations } from '../types'

export const refreshSession: () => void = () => {
  if (typeof window !== 'undefined') {
    const event = new Event('visibilitychange')
    document.dispatchEvent(event)
  }
}

export const userState = atom({
  key: 'user',
  default: null as UserWithRelations | null | 'loading'
})

export const submitUserUpdate: (data: User) => Promise<User | null> = async (
  data
) => await query({ action: 'updateUser', data })

export const submitAccountDeletion: (
  userId: string
) => Promise<User | null> = async (userId) =>
  await query({ action: 'deleteUser', userId })

export const useSetUser: () => SetterOrUpdater<
UserWithRelations | null | 'loading'
> = () => useSetRecoilState(userState)

/** Server-side **/

export const getUserByEmail: (
  email: string
) => Promise<UserWithRelations | null | undefined> = async (email) =>
  await db?.user.findUnique({
    where: { email },
    ...includeFullUser
  })

export const getUserBySlug: (
  slug: string
) => Promise<UserWithRelations | null | undefined> = async (slug) =>
  await db?.user.findUnique({
    where: { slug },
    ...includeFullUser
  })

export const getAllUsers: () => Promise<UserWithRelations[] | null | undefined> = async () =>
  await db?.user.findMany(includeFullUser)

export const updateUser: (
  data: Partial<User>
) => Promise<User | undefined> = async (data) =>
  await db?.user.update({
    where: { id: data.id },
    data
  })

export const deleteUser: (
  userId: string,
  targetUserId: string
) => Promise<User | undefined> = async (userId, targetUserId) =>
  userId === targetUserId
    ? await db?.user.delete({
      where: { id: targetUserId }
    })
    : undefined

export const includeFullUser = {
  include: {}
}
