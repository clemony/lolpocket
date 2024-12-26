<script setup lang="ts">
import type { pocket, Rune, RuneSet } from 'types'

const props = defineProps<{
    type?: number // 1- primary | 2 - secondary
    runeSet?: number
    pocket?: pocket
    path: string
    tier: number
}>()

const setRune = computed(() => {
    return props.type + props.tier
})
</script>
<template>
    <input
        name="rune-select"
        type="radio"
        v-model="setRune"
        class="peer hidden" />
</template>
<style scoped></style>
