import type { modal } from 'types'

const newPocket = defineAsyncComponent({
    loader: () => import('@/components/pocket/ui/pop-pocket.vue'),

})

const command = defineAsyncComponent({
    loader: () => import('@/components/layout/ui/Command.vue'),

})

export const newPocketModal:modal = {
        component: newPocket,
        id: 'newPocket',
        title: 'New Pocket',
description: 'Choose a pocket name (empty for random), tag your pocket for easier searching, and create your pocket icon.',
submitText: 'Create',
}

export const commandModal:modal = {
    component: command,
    id: 'command',
}