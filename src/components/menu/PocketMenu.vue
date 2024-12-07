<script setup lang="ts">
import type { pocket } from 'types'
import { deletePocket, duplicatePocket } from '@utils/pocketUtilities'
import { editPocketDrawer } from '@/components/drawer/data'
import { toggleDrawerState } from '@utils/utils'
import type { HTMLAttributes } from 'vue'

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
    class?: HTMLAttributes['class']
    contentClass?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const menuComponents = computed(() => {
    if (props.type === 'dropdown') {
        return {
            wrapper: DropdownMenu,
            trigger: DropdownMenuTrigger,
            content: DropdownMenuContent,
            item: DropdownMenuItem,
            separator: DropdownMenuSeparator,
        }
    } else if (props.type === 'context') {
        return {
            wrapper: ContextMenu,
            trigger: ContextMenuTrigger,
            content: ContextMenuContent,
            item: ContextMenuItem,
            separator: ContextMenuSeparator,
        }
    } else {
        return null // Fallback for invalid type
    }
})

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
    <component
        :is="menuComponents?.wrapper"
        v-if="pocket"
        :class="cn('flex items-center', props.class)">
        <component
            :is="menuComponents?.trigger"
            :class="cn('flex items-center gap-2', props.contentClass)"
            as-chld>
            <slot />
        </component>

        <component
            :is="menuComponents?.content"
            class="text-2 [&_svg]:size-[11px]">
            <slot name="first" />

            <label class="flex size-full gap-3">
                <component :is="menuComponents?.item">
                    <input
                        type="checkbox"
                        v-model="pocket.pinned"
                        class="hidden" />
                    <icon icon="teenyicons:attach-outline" />
                    {{ pinText }}
                </component>
            </label>

            <component
                :is="menuComponents?.item"
                class="pr-8 capitalize"
                @click="toggleDrawerState(editPocketDrawer, pocket)">
                <icon icon="teenyicons:edit-1-outline" />
                <span class="-ml-[1px]">Edit Pocket Info</span>
            </component>

            <component :is="menuComponents?.separator" />

            <component
                :is="menuComponents?.item"
                @click="duplicatePocket(pocket)">
                <icon icon="teenyicons:layers-subtract-outline" />
                <span class="-ml-[1px]">Duplicate</span>
            </component>

            <component :is="menuComponents?.item">
                <icon icon="teenyicons:upload-outline" />
                <span>Export</span>
            </component>

            <component :is="menuComponents?.separator" />

            <component
                :is="menuComponents?.item"
                @click="deletePocket(pocket.key)">
                <icon icon="teenyicons:bin-outline" />
                Send to Trash
            </component>
        </component>
    </component>
</template>

<style scoped></style>
