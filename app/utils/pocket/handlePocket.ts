import { hexoid } from 'hexoid'
import { toast } from 'vue-sonner'

export async function addPocket(
  name: string,
  tags: string[],
  icon: string,
  key?: string,
) {
  const toID = hexoid()
  const pocketKey = key || toID()

  const ps = usePocketStore()

  const itemSet = newItemSet()
  const runeSet = newRuneSet()
  const spellSet = newSpellSet()

  const newPocket: Pocket = {
    key: pocketKey,
    name: name || generateName(),
    roles: ['all'],
    icon: icon || '/img/lp/192.webp',
    champions: [],
    items: [(await itemSet) as ItemSet],
    runes: [runeSet],
    spells: [spellSet],
    tags: tags?.length ? tags : [''],
    location: {
      pinned: false,
      folder: 'all',
    },
    notes: [''],
    card: {
      splash: null,
      align: '',
      color: '#FFFFFF',
      filter: 'grayscale',
      font: {
        0: 'var(--font-serif)',
        1: 'var(--font-sans)',
      },
    },
    complete: {
      items: [],
      runes: runeSet,
    },
    dateCreated: createDateObject(),
    dateUpdated: createDateObject(),
  }

  console.log('💠 - addPocket - newPocket:', newPocket)

  ps.pockets.push(newPocket)

  console.log('💠 - addPocket - ps.pocket:', ps.pockets)
  const newPocketToast = toast.success(`Pocket ${newPocket.name} created.`, {
    description: 'Head to your new pocket and start planning?',
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
