import { useRef, useState, useEffect } from 'react'
import fs from 'fs'
import path from 'path'
import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { FileTree } from '../types'

export const useSvgIds: (file: JSX.Element, prefix: string) => JSX.Element = (
  file,
  prefix
) => {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (ref.current != null) {
      const descendants = ref.current.querySelectorAll('svg *')
      descendants.forEach((descendant: Element) => {
        for (const attr of descendant.attributes) {
          // Replace things like id="#a"
          if (attr.name === 'id') {
            if (attr.value.includes(prefix)) return
            const newId = `${prefix}__${attr.value}`
            descendant.setAttribute(attr.name, newId)
          }

          // Replace things like fill="#a"
          const match = attr.value.match(/url\(#([a-z])\)/)
          if (match != null) {
            if (attr.value.includes(prefix)) return
            const newId = `url(#${prefix}__${match[1]})`
            descendant.setAttribute(attr.name, newId)
          }
        }
      })
    }
  }, [prefix])

  return <span ref={ref}>{file}</span>
}

export const capitalize: (string: string) => string = string =>
  string != null ? string.charAt(0).toUpperCase() + string.slice(1) : string
export const uncapitalize: (string: string) => string = string =>
  string != null ? string.charAt(0).toLowerCase() + string.slice(1) : string

export const makeTestId: (id: string) => string = id => id
// process.env.REACT_APP_CI != null
//   ? id
//   : Math.random()
//     .toString(36)
//     .substr(2, 9)

export const useListedPrice: (symbol?: string) => number = symbol => {
  const [price, setPrice] = useState(0)
  useEffect(() => {
    void fetch(
      `https://api.binance.com/api/v3/ticker/price?symbol=${symbol ??
        'ETHUSDC'}`
    )
      .then(async res => await res.json())
      .then(res => {
        setPrice(parseFloat(res.price))
      })
  }, [symbol])
  return price
}

export const useBreakpoint: (
  breakpoint: Breakpoint
) => boolean = breakpoint => {
  const theme = useTheme()
  return useMediaQuery(theme.breakpoints.up(breakpoint))
}

export const iterateOverNestedProperties: (
  obj: unknown,
  callback: (obj: unknown, key: string, value: unknown) => void
) => unknown = (obj, callback) => {
  Object.keys(obj as Record<string, unknown>).forEach(key => {
    const value = (obj as Record<string, unknown>)[key]
    callback(obj, key, value)
    if (typeof value === 'object' && value !== null) {
      iterateOverNestedProperties(value, callback)
    }
  })
  return obj
}

export const makeObjectSerializable: (object: unknown) => unknown = (object) =>
  iterateOverNestedProperties(object, (obj, key, value) => {
    if (
      Object.prototype.toString.call(value) === '[object Date]' &&
      value != null
    ) (obj as Record<string, unknown>)[key] = (value as Date).toString()
    if (value === undefined) (obj as Record<string, unknown>)[key] = null
  })

export const walkPath: (dir: string) => string[] = (dir: string) => {
  let results: string[] = []
  const list = fs.readdirSync(dir)
  list.forEach(function (file) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat?.isDirectory()) {
      results = results.concat(walkPath(filePath))
    } else {
      results.push(filePath)
    }
  })

  return results
}

export const makeFileTreeFromPaths: (
  filePaths: string[]
) => Promise<FileTree[]> = async (filePaths) => {
  const addPath: (
    paths: string[],
    arr: FileTree[],
    path: string
  ) => Promise<FileTree[]> = async (paths, arr, path) => {
    const component = paths.shift()
    let current = arr.find((item) => item.text === component)
    if (current == null) {
      const _path =
        paths.length !== 0
          ? path
            .split('/')
            .slice(0, -1)
            .reduce((pv, cv) => pv + '/' + cv) + '/index.mdx'
          : path
      const { metadata } = await import(`../assets/docs${_path}`)
      current = { text: component, path: _path, metadata }
      arr.push(current)
    }
    if (paths.length !== 0) {
      await addPath(paths, current.children ?? (current.children = []), path)
    }
    return arr
  }

  const res = await filePaths.reduce<Promise<FileTree[]>>(
    async (arr, path) =>
      await new Promise((resolve) => {
        void arr.then(async (res) =>
          resolve(await addPath(path.slice(1).split('/'), res, path))
        )
      }),
    new Promise((resolve) => {
      resolve([])
    })
  )
  return res
}

export const Uint8ArrayToJson: (binArray: Uint8Array) => Record<string, unknown> = (binArray) => {
  let str = ''
  for (let i = 0; i < binArray.length; i++) {
    str += String.fromCharCode(binArray[i])
  }
  return JSON.parse(str)
}
