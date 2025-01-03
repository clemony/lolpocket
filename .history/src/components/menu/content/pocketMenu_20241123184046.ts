import type { menu, pocket } from 'types'
import { deletePocket, duplicatePocket } from '@lib/functions/PocketUtilities'
import { useGeneralStore } from '@stores/generalStore'

import { editPocketModal } from '@/components/Layout/ui/Modal'
import { isAsyncFunction } from 'util/types'

const { isLoading, state, isReady, execute } = useAsyncState(
  (args) => {
    const id = args?.id || 1
    return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(t => t.data)
  },
  {},
  {
    delay: 2000,
    resetOnExecute: false,
  },
)

export  const pocketMenu:menu = [
    {
        items: [
            {
                //pinned
                title: computed(() => {
                    if (!pocket) {
                        return
                    }
                    if (pocket.pinned == true) {
                        return 'Unpin'
                    } else {
                        return 'Pin'
                    }
                }),
                type: 'checkbox',
                icon: 'iconoir:pin',
                iconTrue: 'iconoir:pin-solid',
                model: pocket.pinned,
            },
            {
                title: 'Edit Pocket Info',
                icon: 'ep:edit',
                model: pocket.pinned,
                action: gs.toggleModalState(editPocketModal, pocket)
            },
        ],
    },
        {
        items: [
            {
                title: 'Duplicate',
                icon: 'radix-icons:copy',
                action: duplicatePocket(pocket)
            },
                        {
                title: 'Export',
                icon: 'teenyicons:upload-outline',
                action: '',
            },
        ],
    },
     {
        items: [
            {
                title: 'Send to Trash',
                icon: 'iconoir:bin-full',
                action: deletePocket(pocket.key)
            }
        ],
    },
]
