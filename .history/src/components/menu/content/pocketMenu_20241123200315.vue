<script setup lang="ts">
import type { menu, pocket } from 'types'
import { deletePocket, duplicatePocket } from '@utils/PocketUtilities'

import { editPocketModal } from '@/components/Layout/ui/Modal'
import { toggleModalState } from '@utils/utils'

const props = defineProps<{
    pocket: pocket | undefined
    type: string
}>()

const pocket = ref(props.pocket)
console.log(pocket)
const pocketMenu: menu = [
    {
        items: [
            {
                //pinned
                title: /* computed(() => {
                    if (!pocket) {
                        return
                    }
                    if (pocket.value.pinned == true) {
                        return 'Unpin'
                    } else {
                        return 'Pin'
                    }
                }) */ 'pin',
                type: 'checkbox',
                icon: 'iconoir:pin',
                iconTrue: 'iconoir:pin-solid',
                // model: pocket.value.pinned,
            },
            {
                title: 'Edit Pocket Info',
                icon: 'ep:edit',
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
    <Dropdown v-if="type == 'dropdown'" :pocket="pocket" :menu="pocketMenu">
        <template #1>
            <slot name="1" />
        </template>
        <template #2>
            <slot name="2" />
        </template>
    </Dropdown>
</template>
<style scoped></style>
