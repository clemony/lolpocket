import type { menu, menuGroup, menuItem, pocket } from 'types'
import { useQuery } from '@pinia/colada'

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
        title: 'group1',

        data: [
            {   //pinned
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
