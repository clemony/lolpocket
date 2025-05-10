import { hexoid } from 'hexoid'

// delete

export function deletePocket(pocket) {
  const ps = usePocketStore()
  const route = useRoute()
  const inPocket = route.path == `/pocket/${pocket.key}`
  const index = ps.pockets.findIndex(p => p === pocket)
  console.log('💠 - deletePocket - inPocket:', inPocket)

  ps.trashFolder.push(pocket)
  pocket.location.folder = 'trash'
  ps.pockets.splice(index, 1)

  if (inPocket) {
    navigateTo('/pockets')
  }
}

// duplicate

export function duplicatePocket(original: Pocket): Pocket {
  const toID = hexoid()

  const newPocket = deepCopy(original)

  newPocket.key = toID()
  newPocket.name = `${original.name} (copy)`
  newPocket.dateCreated = createDateObject()
  newPocket.dateUpdated = createDateObject()

  usePocketStore().pockets.push(newPocket)
  return newPocket
}

// edit

export function editPocket(pocket: Pocket) {
  const ts = useTempStore()
  ts.selectedPocket = pocket
}

// get

export function getPocket(key) {
  const ps = usePocketStore()
  return ps.pockets.find((pocket: Pocket) => pocket.key === key)
}
