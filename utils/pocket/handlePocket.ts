import { hexoid } from 'hexoid'
import { toast } from 'vue-sonner'

export async function addPocket(name: string, tags: Array<string>, icon: string, key?: string) {
  const toID = hexoid()
  const pocketKey = key || toID()

  const itemSet = newItemSet('', 'New Set')
  const runeSet = newRuneSet()
  const spellSet = newSpellSet()
  const newPocket: pocket = {
    key: pocketKey,
    name: name || generateShortString(),
    roles: [],
    icon: icon || '/img/champion/centered/1.webp',
    champions: {
      children: [],
      default: null,
    },
    items: {
      sets: [itemSet],
      default: null,
    },
    runes: {
      sets: [runeSet],
      default: null,
    },
    spells: {
      sets: [spellSet],
      default: null,
    },
    tags: tags || [''],
    location: {
      pinned: 0,
      folder: 'all',
    },
    notes: [''],
    card: {
      splash: '',
      align: '',
      color: 'bg-[#FFFFFF]',
      filter: true,
      font: {
        0: 'var(--font-serif)',
        1: 'var(--font-sans)',
      },
    },
    complete: {
      items: {
        0: newItemSet('', 'Set 1'),
        1: newItemSet('', 'Set 2'),
        2: newItemSet('', 'Set 3'),
      },
      runes: runeSet,
    },
    dateCreated: createDateObject(),
    dateUpdated: createDateObject(),
  }
  console.log('💠 - addPocket - newPocket:', newPocket)

  newPocket.items.sets[0].items.splice(0, 1)
  const ps = usePocketStore()
  ps.pockets.push(newPocket)
  console.log('💠 - addPocket - ps.pockets:', ps.pockets)

  toast.success(`Pocket ${newPocket.name} created.`, {
    description: 'Head to your new pocket and start editing?',
    duration: 6000,
    action: {
      label: 'Edit Pocket',
      onClick: () => navigateTo({ path: `/pocket/${newPocket.key}` }),
    },
  })
}

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

export function deepCopy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

export function duplicatePocket(original: pocket): pocket {
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

export function editPocket(pocket: pocket) {
  const ts = useTempStore()
  ts.selectedPocket = pocket
}

// get

export function getPocket(key) {
  const ps = usePocketStore()
  return ps.pockets.find((pocket: pocket) => pocket.key === key)
}

// date

export function createDateObject() {
  const now = new Date()
  const patch = useDataStore().currentPatch
  const formattedDate = now.toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  })

  let formattedTime = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  if (formattedTime.startsWith('0')) {
    formattedTime = formattedTime.slice(1)
  }

  return {
    date: formattedDate,
    time: formattedTime,
    patch,
  }
}

// spell

export function createDefaultSpell() {
  const spell: Spell = { name: null, description: null, cd: 0, recharge: 0, charges: 0 }
  return spell
}
