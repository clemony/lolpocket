import { hexoid } from 'hexoid'
import { toast } from 'vue-sonner'

export async function addPocket(name: string, tags: Array<string>, icon: string, key?: string) {
  const toID = hexoid()
  const pocketKey = key || toID()

  const itemSet = newItemSet()
  const runeSet = newRuneSet()

  const newPocket: pocket = {
    key: pocketKey,
    name: name || generateShortString(),
    roles: {
      0: {
        name: 'All',
        icon: 'all-lanes',
      },
      1: {
        name: 'All',
        icon: 'all-lanes',
      },
    },
    icon: icon || '/img/champion/centered/1.webp',
    champions: {
      children: [],
      default: null,
    },
    items: {
      sets: [itemSet],
      default: itemSet.key,
    },
    runes: {
      sets: [runeSet],
      default: runeSet.key,
    },
    spells: [],
    tags: tags || [''],
    location: {
      pinned: 0,
      folder: 'default',
    },
    notes: [''],
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

export function deletePocket(pocketKey: string) {
  const ps = usePocketStore()
  const pocket: pocket = getPocket(pocketKey)
  const index = ps.pockets.findIndex(set => set.key === pocketKey)

  if (index !== -1 && pocket) {
    if (ps.pinnedFolder.includes(pocket)) {
      ps.pinnedFolder.splice(index, 1)
    }
    ps.trashFolder.push(pocket)
    pocket.location.folder = 'trash'
    ps.pockets.splice(index, 1)
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
  ts.editPocketTrigger = true
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
  const spell: Spell = { name: '', description: '', cd: 0, recharge: 0, charges: 0 }
  return spell
}

const champions = ref(null)
const items = ref(null)
const runes = ref(null)
const complete = ref(null)

const championsBtn = ref(null)
const itemsBtn = ref(null)
const runesBtn = ref(null)
const completeBtn = ref(null)
export const pocketComponents = [
  {

    compRef: markRaw(defineAsyncComponent(() => import('components/pocket/Champions.vue'))),
    hoverRef: champions,
    btnRef: championsBtn,
    icon: '',
    title: 'Champions',
  },
  {
    compRef: markRaw(defineAsyncComponent(() => import('components/pocket/Items.vue'))),
    hoverRef: items,
    btnRef: itemsBtn,
    icon: 'bow',
    title: 'Items',
  },
  {

    compRef: markRaw(defineAsyncComponent(() => import('components/pocket/Runes.vue'))),
    hoverRef: runes,
    btnRef: runesBtn,
    icon: '',
    title: 'Runes',
  },
  {

    compRef: markRaw(defineAsyncComponent(() => import('components/pocket/Complete.vue'))),
    hoverRef: complete,
    btnRef: completeBtn,
    icon: 'stash:infinity-solid',
    title: 'Complete Build',
  },
]

export const hoverStates = pocketComponents.map(el => ({
  ref: el.ref,
  btnRef: el.btnRef,
  title: el.title,
  isHovered: useElementHover(el.hoverRef),
  isBtnHovered: useElementHover(el.btnRef),
}))

