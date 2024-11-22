<script setup lang="ts">
const props = defineProps<{
    placeholder: string
}>()
</script>

<template>
    <Button
        size="xs"
        class="relative h-9 !min-h-6 w-[300px] min-w-40 max-w-[500px] items-center justify-start border border-base-300/50 bg-base-100/50 !py-1 px-3 hover:border-base-300/80 hover:bg-base-100/60">
        <icon
            icon="teenyicons:search-outline"
            class="!size-[12px] text-base-content/80" />

        <span
            class="align-end grow px-1 pt-2px text-center text-base-content/80">
            {{ props.placeholder }}
        </span>
        <DropdownMenuShortcut class="">⌘ K</DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
