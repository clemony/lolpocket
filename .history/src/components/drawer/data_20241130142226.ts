import type { drawer } from 'types'

const pocketDrawer = defineAsyncComponent({
    loader: () => import('@/components/drawer/PocketDrawer.vue'),

})


export const newPocketDrawer:drawer = {
        component: pocketDrawer,
        id: 'newPocket',
        title: 'New Pocket',
description: 'Choose a pocket name, tag your pocket (for easier searching), and create your pocket icon. <b>All items can be left blank</b> and edited later.',
submitText: 'Create',
}

export const editPocketDrawer:drawer = {
        component: pocketDrawer,
        id: 'editPocket',
        title: 'Edit Pocket',
description: 'Some mistakes you <em>can</em> make twice. Through trying times of intense struggle, you can <strong>update your pocket\'s details here</strong>.',
submitText: 'Done',
}