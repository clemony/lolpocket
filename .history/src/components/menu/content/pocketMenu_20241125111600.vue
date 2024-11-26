<script setup lang="ts">
import type { menu, pocket } from 'types'
import { deletePocket, duplicatePocket } from '@utils/PocketUtilities'

import { editPocketModal } from '@components/modal/Modal'
import { toggleModalState } from '@utils/utils'

const props = defineProps<{
    pocket: pocket
    type: string
}>()

const pocket = ref(props.pocket)

const component1 = computed (() => {
 const c = props.type == 'dropdown' ? Dropdown
})
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
    <component :is="component1" v-if="pocket">
        <slot name="first" />

        <component>
            <label class="flex size-full gap-3">
                <input type="checkbox" v-model="pocket.pinned" class="hidden" />
                <icon
                    v-if="pocket.pinned == true"
                    icon="iconoir:pin-solid"
                    class="size-3.5" />
                <icon v-else icon="iconoir:pin" class="size-3.5" />
                {{ pinText }}
            </label>
        </component>

        <component class="capitalize">
            <icon icon="ep:edit" class="size-3.5" />
            <span
                @click="toggleModalState(editPocketModal, pocket)"
                class="-ml-[1px]">
                Edit Pocket Info
            </span>
        </component>

        <component />

        <component @click="duplicatePocket(pocket)">
            <icon icon="radix-icons:copy" class="size-3.5" />
            <span class="-ml-[1px]">Duplicate</span>
        </component>

        <component>
            <icon icon="teenyicons:upload-outline" class="size-3.5" />
            <span>Export</span>
        </component>

        <component />

        <slot />

        <component @click="">
            <icon icon="iconoir:bin-full" class="size-3.5" />
            Trash Pocket
        </component>
    </component>
</template>

<style scoped></style>
