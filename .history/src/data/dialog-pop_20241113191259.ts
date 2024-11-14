const newPocket = defineAsyncComponent({
    loader: () => import('@/components/pocket/ui/pop-pocket.vue'),

})

export const NewPocketModal = [{
        component: newPocket,
        title: 'New Pocket',
description: 'Choose a pocket name (empty for random), tag your pocket for easier searching, and create your pocket icon.',
submitText: 'Create',
    }]