import type { drawer } from '@/types/pocketTypes'

const PocketDrawer = defineAsyncComponent({
    loader: () => import('@/components/drawer/PocketDrawer.vue'),
})

const CardDrawer = defineAsyncComponent({
    loader: () => import('@/components/drawer/CardDrawer.vue'),
})

const ChampionDrawer = defineAsyncComponent({
    loader: () => import('@/components/drawer/ChampionDrawer.vue'),
})

const RuneDrawer = defineAsyncComponent({
    loader: () => import('@/components/drawer/RuneDrawer.vue'),
})

const ItemDrawer = defineAsyncComponent({
    loader: () => import('@/components/drawer/ItemDrawer.vue'),
})

export const newPocketDrawer: drawer = {
    component: PocketDrawer,
    direction: 'right',
    id: 'newPocket',
    title: 'New Pocket',
    description:
        'Choose a pocket name, tag your pocket (for easier searching), and create your pocket icon. <b>All items can be left blank</b> and edited later.',
    submitText: 'Create',
}

export const editPocketDrawer: drawer = {
    component: PocketDrawer,
    direction: 'right',
    id: 'editPocket',
    title: 'Edit Pocket',
    description:
        "Some mistakes you <em>can</em> make twice. Through trying times of intense struggle, you can <strong>update your pocket's details here</strong>.",
    submitText: 'Done',
}

export const cardDrawer: drawer = {
    component: CardDrawer,
    direction: 'right',
    id: 'cardBack',
    title: 'Card Backs',
    description: 'Choose a new style for the reverse side of your cards.',
    submitText: 'Done',
}

export const championDrawer: drawer = {
    component: ChampionDrawer,
    title: 'Champion',
    description: ' ',
    direction: 'right',
    id: 'championDrawer',
}

export const runeDrawer: drawer = {
    component: RuneDrawer,
    title: ' ',
    description: ' ',
    direction: 'right',
    id: 'runeDrawer',
}

export const itemDrawer: drawer = {
    component: ItemDrawer,
    title: ' ',
    description: ' ',
    direction: 'right',
    id: 'itemDrawer',
}
