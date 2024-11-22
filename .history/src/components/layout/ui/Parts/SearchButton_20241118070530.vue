<script setup lang="ts">
const props = defineProps<{
    placeholder: string
}>()
</script>

<template>
    <Button
        size="xs"
        class="] w-grow relative h-9 !min-h-6 min-w-40 items-center border border-base-300/50 bg-base-100/50 !py-1 px-3 text-base-content/80 hover:border-base-300/80 hover:bg-base-100/60">
        <icon icon="teenyicons:search-outline" class="!size-[11px]" />

        <span class="align-end grow px-1 pt-2px text-center">
            {{ props.placeholder }}
        </span>
        <DropdownMenuShortcut class="">⌘ K</DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
