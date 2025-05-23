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

// CHAMPS

export function removeChamp(champ, pocket) {
  console.log('💠 - removeChamp - pocket:', pocket)
  const find = pocket.champions.children.findIndex(c => c == champ)
  console.log('💠 - removeChamp - find:', find)

  if (find != -1) {
    pocket.champions.children.splice(find, 1)
  }
}

// RUNES

export function resetRunes(set) {
  set.keystone = null
  set[0].runes = { 1: null, 2: null, 3: null }
  set[1].runes = { 1: null, 2: null, 3: null }
}

export function deleteRuneSet(pocket, set) {
  const a = pocket.runes.findIndex(s => s == set)
  console.log('💠 - deleteRuneSet - a:', a)
  if (a != -1) {
    pocket.runes.splice(a, 1)
  }
}

export function removeSpellSet(pocket, set) {
  const a = pocket.spells.sets.findIndex(s => s == set)
  if (!a)
    return
  pocket.spells.sets.splice(a, 1)
}
