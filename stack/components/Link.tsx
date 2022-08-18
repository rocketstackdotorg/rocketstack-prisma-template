import NextLink, { LinkProps } from 'next/link'
import i18n from 'i18next'
import { SyntheticEvent } from 'react'

const isExternal: (_: string) => boolean = (href) =>
  href.slice(0, 7) === 'http://' ||
  href.slice(0, 8) === 'https://' ||
  href.slice(0, 6) === 'mailto:'

const isPublic: (_: string) => boolean = (href) =>
  href.slice(0, 7) === '/images/'

const Link: React.FC<
LinkProps & {
  target?: string
  rel?: string
  onClick?: (e: SyntheticEvent) => void
}
> = ({ href, onClick, shallow, target, rel, ...props }) => {
  const url = href as string
  const _href = isPublic(url) ? url : `/${i18n.language?.slice(0, 2)}${url}`
  return isExternal(url) || target === '_blank' ? (
    <a
      {...{
        ...props,
        href: isExternal(url) ? url : _href,
        onClick,
        target,
        rel: rel ?? 'noopener noreferrer',
        style: {
          width: 'inherit',
          textDecoration: 'inherit',
          color: 'inherit'
        }
      }}
    />
  ) : (
    <NextLink
      {...{
        ...props,
        onClick,
        target,
        rel,
        href: _href,
        shallow: shallow !== false,
        passHref: true
      }}
    />
  )
}

export default Link
