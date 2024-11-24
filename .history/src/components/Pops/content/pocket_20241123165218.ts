import type { menu, menuGroup, menuItem, pocket } from 'types'
import { useQuery } from '@pinia/colada'
import { useSessionStore } from '@/stores/sessionStore'
import { usePocketStore } from '@/stores/pocketStore'
import { deletePocket, duplicatePocket } from '@lib/functions/PocketUtilities'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
import { editPocketModal } from '@/components/Layout/ui/Modal'
const ps = usePocketStore()
const sn = useSessionStore()

const props = defineProps<{
pocket: pocket
}>()

const pocket = ref(props.pocket)
export const pocketMenu: menu = [
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
