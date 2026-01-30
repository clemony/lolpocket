// helpers

export function stripTs(ev: any) {
  const copy = { ...ev }
  delete copy.timestamp
  return copy
}

export function findLastIndex<T>(arr: T[], pred: (v: T) => boolean) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (pred(arr[i])) return i
  }
  return -1
}

export function timestampOfFirst(arr: any[], pred: (v: any) => boolean) {
  const found = arr.find(pred)
  return found ? found.timestamp : Date.now()
}
