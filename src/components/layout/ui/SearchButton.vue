<script setup lang="ts">
import { commandModal } from '@components/drawer/data'
import { toggleModalState } from '@/utils/utils'
import { useGeneralStore } from '@stores/generalStore'
const gs = useGeneralStore()
const props = defineProps<{
    placeholder: string
}>()
</script>

<template>
    <Button
        size="xs"
        class="h-9 !min-h-6 w-full min-w-40 items-center border border-b3/60 bg-b1/30 !py-1 px-3 shadow-[inset_0px_0px_2px_2px_#00000004,inset_1px_2px_2px_2px_#00000005] hover:border-b3 hover:bg-b2/20 hover:ring-0"
        @click="
            gs.commandOpen ? (gs.commandOpen = false) : (gs.commandOpen = true)
        ">
        <icon
            icon="teenyicons:search-outline"
            class="ml-2px !size-[11px] opacity-90" />

        <span
            class="align-end grow px-1 pt-2px text-center text-sm font-semibold opacity-70">
            {{ props.placeholder }}
        </span>
        <DropdownMenuShortcut class="">⌘ K</DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
