import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/*
1. cn
2. clean name
3. format link
4. get wiki link
5. make box
6. remove items
7. type mixins
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

// remove items

export const removingItems = ref<Record<string, boolean>>({})

export function onRemove<T>(evt: any, array: T[]) {
  const itemKey = evt.item.dataset.key // Get unique key of removed item
  const index = evt.oldIndex

  if (index === undefined || index < 0 || index >= array.length)
    return // Ensure valid index

  // Apply "removing" class
  removingItems.value[itemKey] = true

  // Wait for animation to finish before actually removing
  setTimeout(() => {
    array.splice(index, 1) // Remove item from array
    delete removingItems.value[itemKey] // Cleanup
  }, 600) // Match animation duration
}

// type mixins

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      if (name !== 'constructor') {
        derivedCtor.prototype[name] = baseCtor.prototype[name]
      }
    })
  })
}