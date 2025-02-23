import { hexoid } from 'hexoid'
import { toast } from 'vue-sonner'
/* import Champions from 'pages/pocket/[pocketKey]/champions.vue'
import Items from 'pages/pocket/[pocketKey]/items.vue'
import Runes from 'pages/pocket/[pocketKey]/runes.vue'
import Complete from 'pages/pocket/[pocketKey]/complete.vue' */

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
      folder: 'all',
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
  const spell: Spell = { name: '', description: '', cd: 0, recharge: 0, charges: 0 }
  return spell
}

const championsButton = ref(null)
const itemsButton = ref(null)
const runesButton = ref(null)
const completeButton = ref(null)

export function getPocketLinks(pocket: pocket) {
  const pocketPages: SidebarItem[] = [
    {

      link: `/pocket/${pocket.key}`,
      name: 'Champions',
      buttonRef: championsButton,
      icon: 'i-no-champ',
    },
    {
      link: `/pocket/${pocket.key}/items`,
      name: 'items',
      buttonRef: itemsButton,
      icon: 'mdi:bow-arrow',
    },
    {

      link: `/pocket/${pocket.key}/runes`,
      name: 'runes',
      buttonRef: runesButton,
      icon: 'i-rune-icon',
    },
    {

      link: `/pocket/${pocket.key}/complete`,
      name: 'complete',
      buttonRef: completeButton,
      icon: 'stash:infinity-solid',
    },
  ]

  return pocketPages
}
/*
export const hoverStates = pocketPages.map(el => ({

  isButtonHovered: el.buttonRef ? useElementHover(computed(() => el.buttonRef.value)) : ref(false),
}))
watch(
  () => hoverStates,
  (newVal) => {
    console.log('💠 - newVal:', newVal)
  },
)
 */