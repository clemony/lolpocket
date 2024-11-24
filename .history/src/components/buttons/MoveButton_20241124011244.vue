<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import { deletePocket } from '@utils/PocketUtilities'
import { toast } from 'vue-sonner'

const ps = usePocketStore()

const props = defineProps<{
    to?: Array<any>
    text?: string
    icon?: string
}>()

function move() {
    const selectedKeys = ps.selectedRows.map(({ key }) => key)

    /*     function description() {
        if (selectedKeys.length > 1) {
            return `${selectedKeys.length} pockets moved to ${props.text}`
        } else {
            return `One pocket moved to ${props.text}`
        }
    }
 */
    selectedKeys.forEach((key) => {
        deletePocket(key)
    })

    /*     toast(props.text, {
        description: description,
        action: {
            label: 'Undo',
            onClick: () => console.log('Undo'),
        },
    }) */
}

const selectedCount = ref(ps.selectedRows.length)

watch(
    () => ps.selectedRows,
    (newVal) => {
        selectedCount.value = newVal.length
    }
)
</script>

<template>
    <Button
        variant="outline"
        @click="move"
        :alt="'move to' + props.text"
        :disabled="!ps.selectedRows.length"
        class="join-item relative">
        <slot />

        <div
            v-if="ps.selectedRows.length"
            class="! pointer-events-none absolute right-1 top-[1px] grid aspect-square !h-10 !w-12 place-content-center place-items-center rounded-full bg-neutral px-2 text-neutral-content">
            {{ selectedCount }}
        </div>
    </Button>
</template>

<style scoped></style>
