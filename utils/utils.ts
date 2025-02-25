import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/*
1. cn
2. clean name
3. format link
4. get wiki link
5. make box
8. ger random
*/

// cn

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// clean name

export function cleanName(name: string): string[] {
  const cleanedName = name
    .replace(/\b(the|of)\b/gi, '')
    .replace(/\./g, '')
    .trim()

  return cleanedName.split(/\s+/).filter(Boolean)
}

// format link

export function formatLink(link: string) {
  return link.replace(' ', '_').replace('\'', '%27')
}

// get wiki link

export function getWikiLink(thing: string) {
  const a = formatLink(thing)
  return `https://wiki.leagueoflegends.com/en-us/${a}`
}

// make box

export function makeBox(length, target) {
  if (length < target) {
    return (target - length) as number
  }
}

export function getRandom(thing: any[]) {
  const i = Math.floor(Math.random() * thing.length)
  return thing[i]
}
