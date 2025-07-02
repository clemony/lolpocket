import { hexoid } from "hexoid"
import { toast } from "vue-sonner"

// delete

export function deletePocket(pocket) {
  const ps = usePocketStore()
  const as = useAccountStore()
  const route = useRoute()
  const inPocket = route.path == `/pocket/${pocket.key}`
  const index = ps.pockets.findIndex((p) => p === pocket)
  console.log("💠 - deletePocket - inPocket:", inPocket)

  ps.trashFolder.push(pocket)
  pocket.location.folder = "trash"
  ps.pockets.splice(index, 1)

  if (inPocket) {
    navigateTo("/pockets")
  }

  if (as.userAccount.settings.notifications.newPocket) {
    const newPocketToast = toast.success(
      `Pocket ${pocket.name} sent to trash.`,
      {
        description: "You can restore it for up to 30 days.",
        duration: 7000,
        action: {
          label: "Restore?",
          //onClick: () => navigateTo({ path: `/pocket/${newPocket.key}` }),
        },
        cancel: {
          label: "×",
          onClick: () => toast.dismiss(newPocketToast),
        },
      }
    )

    constructNotification(
      `Pocket ${pocket.name} sent to trash.`,
      pocket.key,
      "deletePocket"
    )
  }
}

// duplicate

export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

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
  // ts.selectedPocket = pocket
}

// get

export function getPocket(key) {
  const ps = usePocketStore()
  return ps.pockets.find((pocket: Pocket) => pocket.key === key)
}

// CHAMPS

export function removeChamp(champ, pocket) {
  console.log("💠 - removeChamp - pocket:", pocket)
  const find = pocket.champions.children.findIndex((c) => c == champ)
  console.log("💠 - removeChamp - find:", find)

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
  const a = pocket.runes.findIndex((s) => s == set)
  console.log("💠 - deleteRuneSet - a:", a)
  if (a != -1) {
    pocket.runes.splice(a, 1)
  }
}

export function removeSpellSet(pocket, set) {
  const a = pocket.spells.sets.findIndex((s) => s == set)
  if (!a) return
  pocket.spells.sets.splice(a, 1)
}
