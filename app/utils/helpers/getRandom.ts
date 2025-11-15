export function getRandom(thing: any[]) {
  const i = Math.floor(Math.random() * thing.length)
  return thing[i]
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
