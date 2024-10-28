<script setup lang="ts">
import { generateRandomString } from '@utils/keygen'
import type { pocket } from 'types'

const props = defineProps<{
    pocket: pocket
}>()
</script>

<template>
<ContextMenuItem @click="pocket.name = generateRandomString()" class="group/what gap-3">
    <icon icon="ph:question-mark"
        class="size-4 transition-all duration-200 ease-in group-hover/what:rotate-45 group-hover/what:fill-mode-both group-hover/what:[transform-origin:bottom_center]" />
    New Mystery Name
</ContextMenuItem>
<ContextMenuSeparator />
</template>

<style scoped></style>