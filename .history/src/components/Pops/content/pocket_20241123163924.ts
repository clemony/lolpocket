import type { menu, menuGroup, menuItem, pocket } from 'types'
import { useQuery } from '@pinia/colada'
import { useSessionStore } from '@/stores/sessionStore'
import { usePocketStore } from '@/stores/pocketStore'
import { duplicatePocket } from '@lib/functions/PocketUtilities'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
import { editPocketModal } from '@/components/Layout/ui/Modal'
const ps = usePocketStore()
const sn = useSessionStore()


const {
    // main query properties
    state,
    asyncStatus,
    refresh,
    refetch,
    // convenient aliases
    error,
    data,
    status,
    isLoading,
    isPending,
    isPlaceholderData,
} = useQuery({
    key: ['pocket'],
    query: () => fetch('@stores/pocketStore').then((res) => res.json()),
})

const pocket = data.value
export const pocketMenu: menu = [
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
                icon: 'radix-icons:copy',
                action: duplicatePocket(pocket)
            },
        ],
    },
]

/*     link?: string
    icon?: string
    iconFalse?: string
    shortcut?: string
    subMenu?: Array<menuItem>
    } */
