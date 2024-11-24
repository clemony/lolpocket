import type {menu, menuGroup, menuItem, pocket} from 'types'

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