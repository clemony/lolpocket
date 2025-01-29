export function useRandom(thing: any[]) {
  const i = Math.floor(Math.random() * thing.length)
  return thing[i]
}
