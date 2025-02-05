import PocketToast from 'components/app/pops/toast/PocketToast.vue'
import { hexoid } from 'hexoid'
import { toast } from 'vue-sonner'

const toID = hexoid()

export default function addPocket(name: string, tags: Array<string>, icon: string, key?: string) {
  const pocketKey = key || toID()

  const newPocket: pocket = {
    key: pocketKey,
    name: name || generateRandomString(),
    roles: [],
    icon: icon || '/img/champion/centered/-1.webp',
    champions: {
      children: [],
      default: null,
    },
    items: {
      sets: [],
      default: null,
    },
    runes: {
      sets: [],
      default: null,
    },
    spells: [],
    tags: tags || [''],
    notes: [''],
    dateCreated: createDateObject(),
    dateUpdated: createDateObject(),
  }

  const ps = usePocketStore()
  ps.pockets.push(newPocket)
  const p = getPocket(pocketKey)
  const a = newItemSet(p)
  p.items.default.push(a)
  const b = newRuneSet(p)
  p.runes.default = b

  toast(markRaw(PocketToast), {
    unstyled: true,
    duration: Infinity,
    classes: {
      toast: 'bg-b1/95 border !border-b2 shadow-pretty mt-14   w-98 max-w-98 justify-start rounded-lg p-5  !h-40 backdrop-blur-md relative ',
    },
    componentProps: {
      pocket: newPocket,
    },
  })
}
