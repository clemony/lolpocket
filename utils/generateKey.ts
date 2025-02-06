import { hexoid } from 'hexoid'

const toID = hexoid()
export function getKey() {
  const newKey = new Date().toLocaleString().replace(/,\s/g, '').replace(/\s+/g, '').replace(/\//g, '').replace(/:/g, '').trim().toString()

  return newKey
}

export function generateKey() {
  const toID = hexoid()
  return toID.toString()
}
