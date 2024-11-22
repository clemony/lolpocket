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
        class="h-9 !min-h-6 w-full min-w-40 items-center border border-base-300/60 !py-1 px-3 shadow-[inset_0px_0px_2px_2px_#00000006,inset_1px_1px_3px_2px_#00000007] hover:border-neutral/40"
        @click="gs.toggleModalState(commandModal)">
        <icon icon="teenyicons:search-outline" class="-mt-px !size-[11px]" />

        <span class="align-end grow px-1 pt-2px text-center text-sm">
            {{ props.placeholder }}
        </span>
        <DropdownMenuShortcut class="">⌘ K</DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
