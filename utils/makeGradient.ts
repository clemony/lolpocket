export default function makeGradient(from: string, fromOpacity: number, to: string, toOpacity: number, direction: string) {
  let a = `from-${from}`
  a = fromOpacity ? `${a}/${fromOpacity}` : a

  let b = `to-${to}`
  b = fromOpacity ? `${b}/${toOpacity}` : b

  const c = `bg-gradient-to-${direction}`

  return `${a} ${b} ${c}`
}
