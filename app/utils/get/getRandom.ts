export function getRandom(thing: any[]) {
  const i = Math.floor(Math.random() * thing.length)
  return thing[i]
}