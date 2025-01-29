import { hexoid } from 'hexoid'
import createDateObject from './createDateObject'

export default function duplicatePocket(original: pocket): pocket {
  const toID = hexoid()

  const newPocket = deepCopy(original)

  newPocket.key = toID()
  newPocket.name = `${original.name} (copy)`
  newPocket.dateCreated = createDateObject()
  newPocket.dateUpdated = createDateObject()

  usePocketStore().pockets.push(newPocket)
  return newPocket
}
