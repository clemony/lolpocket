<script setup lang="ts">
//import { commandModal } from '@/components/drawer/data'
//import { toggleDrawerState } from '@/utils/utils'
import { useGeneralStore } from '@/stores/generalStore'
const gs = useGeneralStore()
const props = defineProps<{
    placeholder: string
}>()
</script>

<template>
    <Button
        size="xs"
        class="border-b3 bg-b1 hover:border-b3 hover:bg-b2/20 flex !h-9 min-h-6 w-full min-w-44 items-center border !px-2 !py-0 hover:ring-0"
        @click="
            gs.commandOpen ? (gs.commandOpen = false) : (gs.commandOpen = true)
        ">
        <icon
            icon="teenyicons:search-outline"
            class="-mt-px mr-1 ml-1 size-4 justify-self-start opacity-95" />

        <span
            class="align-end text-2 mt-px grow text-start font-medium opacity-70">
            {{ props.placeholder }}
        </span>
        <DropdownMenuShortcut as-child>
            <Badge size="sm" class="text-3 -mr-1 rounded-md shadow-xs">
                ⌘ K
            </Badge>
        </DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
