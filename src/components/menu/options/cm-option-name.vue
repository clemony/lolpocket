<script setup lang="ts">
import { generateRandomString } from '@/functions/Keygen'
import type { pocket } from '@/types/pocketTypes'

const props = defineProps<{
    pocket: pocket
}>()
</script>

<template>
    <ContextMenuItem
        @click="pocket.name = generateRandomString()"
        class="group/what gap-3">
        <icon
            icon="ph:question-mark"
            class="group-hover/what:fill-mode-both size-4 transition-all duration-200 ease-in group-hover/what:[transform-origin:bottom_center] group-hover/what:rotate-45" />
        New Mystery Name
    </ContextMenuItem>
    <ContextMenuSeparator />
</template>

<style scoped></style>
