import { hexoid } from 'hexoid'
import { toast } from 'vue-sonner'

export async function addPocket(
  name?: string,
  tags?: string[],
  icon?: string,
  key?: string,
) {
  const toID = hexoid()
  const pocketKey = key || toID()

  const ps = usePocketStore()
  const as = useAccountStore()

  const itemSet = newItemSet()
  const runeSet = newRuneSet()
  const spellSet = newSpellSet()

  const newPocket: Pocket = {
    key: pocketKey,
    name: name || generateName(),
    roles: ['all'],
    icon: icon || null,
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

  if (as.settings.alertNewPocket) {
    const newPocketToast = toast.success('Pocket Added!', {
      description: `Pocket "${newPocket.name}" created. Head to your new pocket and start editing?`,
      duration: 8000,
      action: {
        label: 'Open Pocket',
        onClick: () => navigateTo({ path: `/pocket/${newPocket.key}` }),
      },
      cancel: {
        label: '×',
        onClick: () => toast.dismiss(newPocketToast),
      },
    })

    const vars = {
      pocketKey: newPocket.key,
      pocketName: newPocket.name,
    }

    saveNotification( 'newPocket', vars)
  }
}
