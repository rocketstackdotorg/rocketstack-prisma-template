import { User } from '@prisma/client'

export interface Seo {
  title: string
  canonicalUrl: string
  metaDesc: string
}

export interface DocsMetadata {
  title: string
  order: number
  folderName?: string
}

export interface FileTree {
  text?: string
  path?: string
  children?: FileTree[]
  metadata?: DocsMetadata
}

export type UserWithRelations = User

export interface SessionWithUser {
  user: UserWithRelations
  expires: Date
}

export interface Language {
  name: string
  language: string
}

export type Locale = Record<string, { translations: Record<string, string> }>

export type Modal = null | JSX.Element
export type SetModal = React.Dispatch<React.SetStateAction<Modal>>
