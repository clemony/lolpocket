<script setup lang="ts">
import { useGeneralStore } from '@stores/generalStore'
import { commandModal } from '@/components/Layout/ui/Modal'
const gs = useGeneralStore()
const props = defineProps<{
    placeholder: string
}>()
</script>

<template>
    <Button
        size="xs"
        class="hover:bg==5-base-100/70 h-9 !min-h-6 w-full min-w-40 items-center border border-base-300/60 bg-base-200/10 !py-1 px-3 shadow-inner hover:border-neutral/40"
        @click="gs.toggleModalState(commandModal)">
        <icon icon="teenyicons:search-outline" class="-mt-px !size-[11px]" />

        <span class="align-end grow px-1 pt-2px text-center text-sm">
            {{ props.placeholder }}
        </span>
        <DropdownMenuShortcut class="">⌘ K</DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
