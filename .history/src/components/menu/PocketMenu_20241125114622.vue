<script setup lang="ts">
import type { pocket } from 'types'
import { deletePocket, duplicatePocket } from '@/utils/PocketUtilities'
import { editPocketModal } from '@/components/modal/Modal'
import { toggleModalState } from '@utils/utils'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/base/dropdown-menu'

import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger,
} from '@/components/base/context-menu'

const props = defineProps<{
    pocket: pocket
    type: string
}>()

const pocket = ref(props.pocket)

const wrapper = useTemplateRef(
    props.type == 'dropdown' ? DropdownMenu
    : props.type == 'context' ? ContextMenu
    : ''
)
const trigger = useTemplateRef(
    props.type == 'dropdown' ? DropdownMenuTrigger
    : props.type == 'context' ? ContextMenuTrigger
    : ''
)
const content = useTemplateRef(
    props.type == 'dropdown' ? DropdownMenuContent
    : props.type == 'context' ? ContextMenuContent
    : ''
)
const item = useTemplateRef(
    props.type == 'dropdown' ? DropdownMenuItem
    : props.type == 'context' ? ContextMenuItem
    : ''
)
const separator = useTemplateRef(
    props.type == 'dropdown' ? DropdownMenuSeparator
    : props.type == 'context' ? ContextMenuSeparator
    : ''
)

console.log(pocket)
const pinText = computed(() => {
    if (!pocket) {
        return
    }
    if (pocket.value.pinned == true) {
        return 'Unpin'
    } else {
        return 'Pin'
    }
})
</script>
<template>
    <component :is="wrapper" v-if="pocket">
        <component :is="trigger">
            <slot name="first" />
        </component>

        <component :is="content">
            <component :is="item">
                <label class="flex size-full gap-3">
                    <input
                        type="checkbox"
                        v-model="pocket.pinned"
                        class="hidden" />
                    <icon
                        v-if="pocket.pinned == true"
                        icon="iconoir:pin-solid"
                        class="size-3.5" />
                    <icon v-else icon="iconoir:pin" class="size-3.5" />
                    {{ pinText }}
                </label>
            </component>

            <component :is="item" class="capitalize">
                <icon icon="ep:edit" class="size-3.5" />
                <span
                    @click="toggleModalState(editPocketModal, pocket)"
                    class="-ml-[1px]">
                    Edit Pocket Info
                </span>
            </component>

            <component :is="separator" />

            <component :is="item" @click="duplicatePocket(pocket)">
                <icon icon="radix-icons:copy" class="size-3.5" />
                <span class="-ml-[1px]">Duplicate</span>
            </component>

            <component :is="item">
                <icon icon="teenyicons:upload-outline" class="size-3.5" />
                <span>Export</span>
            </component>

            <component />

            <slot :is="separator" />

            <component :is="item" @click="deletePocket(pocket.key)">
                <icon icon="iconoir:bin-full" class="size-3.5" />
                Send to Trash
            </component>
        </component>
    </component>
</template>

<style scoped></style>
