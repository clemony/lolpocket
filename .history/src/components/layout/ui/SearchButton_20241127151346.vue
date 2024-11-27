<script setup lang="ts">
import { commandModal } from '@/components/modal/Modal'
import { toggleModalState } from '@/utils/utils'
const props = defineProps<{
    placeholder: string
}>()
</script>

<template>
    <Button
        size="xs"
        class="border-b3/60 bg-b1/30 hover:border-b3 hover:bg-b2/20 h-9 min-h-6! w-full min-w-40 items-center border px-3 py-1! shadow-[inset_0px_0px_2px_2px_#00000004,inset_1px_2px_2px_2px_#00000005] hover:ring-0"
        @click="toggleModalState(commandModal)">
        <icon
            icon="teenyicons:search-outline"
            class="ml-2px size-[11px]! opacity-90" />

        <span
            class="align-end pt-2px grow px-1 text-center text-sm font-semibold opacity-70">
            {{ props.placeholder }}
        </span>
        <DropdownMenuShortcut class="">⌘ K</DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
