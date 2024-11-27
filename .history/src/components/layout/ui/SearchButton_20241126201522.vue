<script setup lang="ts">
import { commandModal } from '@/components/modal/Modal'
import { toggleModalState } from '@/utils/utils'
const props = defineProps<{
    placeholder: string
}>()

//teenyicons:search-outline
</script>

<template>
    <Button
        size="xs"
        class="h-9 !min-h-6 w-full min-w-40 items-center border border-base-300/60 bg-base-100/30 !py-1 px-3 shadow-[inset_0px_0px_2px_2px_#00000004,inset_1px_2px_2px_2px_#00000005] hover:border-base-300 hover:bg-base-200/20 hover:ring-0"
        @click="toggleModalState(commandModal)">
        <icon icon="hugeicons:search-list-02" class="-mt-px !size-8" />

        <span
            class="align-end grow px-1 pt-2px text-center text-sm font-semibold opacity-70">
            {{ props.placeholder }}
        </span>
        <DropdownMenuShortcut class="">⌘ K</DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
