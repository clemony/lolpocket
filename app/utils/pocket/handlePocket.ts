import { hexoid } from 'hexoid'
import { toast } from 'vue-sonner'

export async function addPocket(name: string, tags: string[], icon: string, key?: string) {
  const toID = hexoid()
  const pocketKey = key || toID()

  const ps = usePocketStore()

  const defaultChampion = createDefaultChampion()
  const itemSet = newItemSet('', 'Set 1')
  const runeSet = newRuneSet()
  const spellSet = newSpellSet()

  const newPocket: Pocket = {
    key: pocketKey,
    name: name || generateShortString().toString(),
    roles: ['all'],
    icon: icon || '/img/lp/192.webp',
    champions: {
      children: [defaultChampion],
      default: defaultChampion,
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
    tags: tags?.length ? tags : [''],
    location: {
      pinned: false,
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
        0: itemSet,
        1: newItemSet('', 'Set 2'),
        2: newItemSet('', 'Set 3'),
      },
      runes: runeSet,
    },
    dateCreated: createDateObject(),
    dateUpdated: createDateObject(),
  }

  // Clean up any placeholder item in the first set
  newPocket.items.sets[0].items = []
  console.log('💠 - addPocket - newPocket:', newPocket)

  ps.pockets.push(newPocket)

  console.log('💠 - addPocket - ps.pocket:', ps.pockets)
  const newPocketToast = toast.success(`Pocket ${newPocket.name} created.`, {
    description: 'Head to your new pocket and start crafting?',
    duration: 7000,
    action: {
      label: 'Open Pocket',
      onClick: () => navigateTo({ path: `/pocket/${newPocket.key}` }),
    },
    cancel: {
      label: '×',
      onClick: () => toast.dismiss(newPocketToast),
    },
  })
}
