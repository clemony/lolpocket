import type { modal } from 'types'

const pocketModal = defineAsyncComponent({
    loader: () => import('@/components/Layout/ui/PocketModal.vue'),

})

const command = defineAsyncComponent({
    loader: () => import('@/components/Layout/ui/Command.vue'),

})

export const newPocketModal:modal = {
        component: pocketModal,
        id: 'newPocket',
        title: 'New Pocket',
description: 'Choose a pocket name (empty for random), tag your pocket for easier searching, and create your pocket icon.',
submitText: 'Create',
}

export const commandModal:modal = {
    component: command,
    id: 'command',
    title: 'Command',
    description: 'Search',
}

export const editPocketModal:modal = {
        component: pocketModal,
        id: 'editPocket',
        title: 'Edit Pocket',
description: 'Some mistakes you CAN make twice. For those trying times of pure necessity and struggle, you can update your Pocket information here.',
submitText: 'Finish',
}