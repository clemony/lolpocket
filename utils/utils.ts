import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { breakpointsBootstrapV5, breakpointsTailwind, useBreakpoints } from '@vueuse/core'

/*
1. cn
# breakpoints
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

// breakpoints

export const twBreakpoints = useBreakpoints(breakpointsTailwind)
export const bsBreakpoints = useBreakpoints(breakpointsBootstrapV5)

export const smAndLarger = twBreakpoints.greaterOrEqual('sm') // sm and larger
export const largerThanSm = twBreakpoints.greater('sm') // only larger than sm
export const lgAndSmaller = twBreakpoints.smallerOrEqual('lg') // lg and smaller
export const smallerThanLg = twBreakpoints.smaller('lg') // only smaller than lg
export const smallerThan6xl = bsBreakpoints.smaller('xl')

/* Variant Minimum width CSS
@3xs 16rem (256px) @container (width >= 16rem) { … }
@2xs 18rem (288px) @container (width >= 18rem) { … }
@xs 20rem (320px) @container (width >= 20rem) { … }
@sm 24rem (384px) @container (width >= 24rem) { … }
@md 28rem (448px) @container (width >= 28rem) { … }
@lg 32rem (512px) @container (width >= 32rem) { … }
@xl 36rem (576px) @container (width >= 36rem) { … }
@2xl 42rem (672px) @container (width >= 42rem) { … }
@3xl 48rem (768px) @container (width >= 48rem) { … }
@4xl 56rem (896px) @container (width >= 56rem) { … }
@5xl 64rem (1024px) @container (width >= 64rem) { … }
@6xl 1200
@7xl 80rem (1280px) @container (width >= 80rem) { … }
 */
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
