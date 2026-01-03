export function getRandom(thing: any[]) {
  const i = Math.floor(Math.random() * thing.length)
  return thing[i]
}

export const safeArray = <T>(v?: T[] | null): T[] => (Array.isArray(v) ? v : [])
