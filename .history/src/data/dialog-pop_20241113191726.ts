const newPocket = defineAsyncComponent({
    loader: () => import('@/components/pocket/ui/pop-pocket.vue'),

})

const command = defineAsyncComponent({
    loader: () => import('@/components/pocket/ui/pop-pocket.vue'),

})

export const modal = [{
    newPocket: {
        component: newPocket,
        title: 'New Pocket',
description: 'Choose a pocket name (empty for random), tag your pocket for easier searching, and create your pocket icon.',
submitText: 'Create',
    },
command: {
    component: 
}
}]