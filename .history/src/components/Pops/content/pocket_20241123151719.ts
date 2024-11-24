import type {menu, menuGroup, menuItem, pocket} from 'types'
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
  key: ['todos'],
  query: () => fetch('/api/todos').then((res) => res.json()),
})

export const pocketMenu: menu = [
    {
    title: 'group1',
    data: [
        {
            title: computed (() => {
             if (!pocket) {
        return
    }
    if (pocket.pinned == true) {
        return 'Unpin'
    } else {
        return 'Pin'
    }
            })
        }
    ] 
}
]

 type: checkbox
    link?: string
    icon?: string
    iconFalse?: string
    shortcut?: string
    subMenu?: Array<menuItem>
    }