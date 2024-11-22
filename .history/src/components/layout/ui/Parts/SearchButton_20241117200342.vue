<script setup lang="ts">
const props = defineProps<{
    placeholder: string
}>()
</script>

<template>
    <Button
        size="xs"
        class="relative h-9 !min-h-6 w-[250px] min-w-40 max-w-[500px] items-center justify-start border border-base-300/80 bg-base-100/50 !py-1 px-2 hover:bg-base-100/60 hover:ring-1 hover:ring-neutral/40">
        <icon
            icon="teenyicons:search-outline"
            class="!size-[12px] text-base-content/80" />

        <span class="align-end grow px-1 pt-2px text-left text-base-content/80">
            {{ props.placeholder }}
        </span>
        <DropdownMenuShortcut class="mr-1">⌘ K</DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
