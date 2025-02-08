import { hexoid } from 'hexoid'
import { toast } from 'vue-sonner'

export async function addPocket(name: string, tags: Array<string>, icon: string, key?: string) {
  const toID = hexoid()
  const pocketKey = key || toID()

  const itemSet = newItemSet()
  const runeSet = newRuneSet()

  const newPocket: pocket = {
    key: pocketKey,
    name: name || generateRandomString(),
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
    icon: icon || '/img/champion/centered/-1.webp',
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
    folderKey: 'default',
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
