<script setup lang="ts">
import type { menu, pocket } from 'types'
import { deletePocket, duplicatePocket } from '@utils/PocketUtilities'

import { editPocketModal } from '@/components/Layout/ui/Modal'
import { toggleModalState } from '@utils/utils'

const props = defineProps<{
    pocket: pocket
    type: string
}>()

const pocket = ref(props.pocket)
const pocketMenu: menu = [
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
                action: toggleModalState(editPocketModal, pocket),
            },
        ],
    },
    {
        items: [
            {
                title: 'Duplicate',
                icon: 'radix-icons:copy',
                action: duplicatePocket(pocket.value),
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
                action: deletePocket(pocket.value.key),
            },
        ],
    },
]
</script>
<template>
<template v-if="type == 'dropdown'">
<Dropdown :pocket="pocket" :menu="pocketMenu" />
    </template

</template>
<style scoped></style>
