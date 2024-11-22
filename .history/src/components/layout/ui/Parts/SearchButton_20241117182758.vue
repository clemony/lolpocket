<script setup lang="ts"></script>

<template>
    <Button
        size="xs"
        class="relative h-9 !min-h-6 w-full min-w-40 items-center justify-start border border-base-300/80 bg-base-100/50 !py-1 px-2 ring-1 hover:border-base-300 hover:bg-base-100/60 hover:ring-neutral/60">
        <icon
            icon="teenyicons:search-outline"
            class="!size-[12px] text-base-content/80" />

        <span class="align-end grow px-1 pt-2px text-left text-base-content/80">
            Search
        </span>
        <DropdownMenuShortcut class="mr-1">⌘ K</DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
