import type { drawer } from 'types'


const command = defineAsyncComponent({
    loader: () => import('@/components/command/Command.vue'),

})


export const commandModal:drawer = {
    component: command,
    id: 'command',
    title: 'Command',
    description: 'Search',
}
