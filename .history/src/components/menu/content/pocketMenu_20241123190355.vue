<script setup lang="ts">
import type { menu, pocket } from 'types'
import { deletePocket, duplicatePocket } from '@utils/PocketUtilities'

import { editPocketModal } from '@/components/Layout/ui/Modal'
import { toggleModalState } from '@utils/utils'

const props = defineProps<{
    pocket: pocket
}>()
export const pocketMenu: menu = [
    {
        items: [
            {
                //pinned
                title: computed(() => {
                    if (!pocket) {
                        return
                    }
                    if (pocket.pinned == true) {
                        return 'Unpin'
                    } else {
                        return 'Pin'
                    }
                }),
                type: 'checkbox',
                icon: 'iconoir:pin',
                iconTrue: 'iconoir:pin-solid',
                model: pocket.pinned,
            },
            {
                title: 'Edit Pocket Info',
                icon: 'ep:edit',
                model: pocket.pinned,
                action: toggleModalState(editPocketModal, pocket),
            },
        ],
    },
    {
        items: [
            {
                title: 'Duplicate',
                icon: 'radix-icons:copy',
                action: duplicatePocket(pocket),
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
                action: deletePocket(pocket.key),
            },
        ],
    },
]
</script>
<template></template>
<style scoped></style>
