<script setup lang="ts"></script>

<template>
    <Button
        variant="outline"
        class="relative h-7 w-full max-w-44 items-center justify-start border-base-300 bg-base-100/60 px-2 hover:cursor-text">
        <icon
            icon="teenyicons:search-outline"
            class="-mt-px size-[11px] shrink-0 text-base-content/80" />

        <span class="align-end grow px-1 pt-px text-left text-base-content/80">
            Search
        </span>
        <DropdownMenuShortcut>⌘ K</DropdownMenuShortcut>
    </Button>
</template>

<style scoped></style>
