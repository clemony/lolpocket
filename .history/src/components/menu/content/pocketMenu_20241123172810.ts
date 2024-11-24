import type { menu, pocket } from 'types'
import { deletePocket, duplicatePocket } from '@lib/functions/PocketUtilities'
import { useGeneralStore } from '@stores/generalStore'

import { editPocketModal } from '@/components/Layout/ui/Modal'


const props = defineProps<{
pocket: pocket
}>()

const pocket = ref(props.pocket)

export const pocketMenu = computed ((pocket:pocket) => {
    const gs = useGeneralStore()
const menu = [
    {
        items: [
            {
                //pinned
                title: computed(() => {
                    if (!pocket) {
                        return
                    }
                    if (pocket.value.pinned == true) {
                        return 'Unpin'
                    } else {
                        return 'Pin'
                    }
                }),
                type: 'checkbox',
                icon: 'iconoir:pin',
                iconTrue: 'iconoir:pin-solid',
                model: pocket.value.pinned,
            },
            {
                title: 'Edit Pocket Info',
                icon: 'ep:edit',
                model: pocket.value.pinned,
                action: gs.toggleModalState(editPocketModal, pocket)
            },
        ],
    },
        {
        items: [
            {
                title: 'Duplicate',
                icon: 'radix-icons:copy',
                action: duplicatePocket(pocket.value)
            },
                        {
                title: 'Export',
                icon: 'teenyicons:upload-outline',
                action: '',
            },
        ],
    },
     {
        items: [
            {
                title: 'Send to Trash',
                icon: 'iconoir:bin-full',
                action: deletePocket(pocket.value.key)
            }
        ],
    },
]
return menu
}) 
