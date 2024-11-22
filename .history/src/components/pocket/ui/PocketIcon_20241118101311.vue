<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import type { pocket } from 'types'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    pocket: pocket
    class?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const match = /
const icon = computed(() => {})
</script>

<template>
    <button
        v-if="pocket"
        class="pointer-events-none relative grid size-12 place-items-center rounded-full border border-transparent p-3.5 shadow-sm transition-all duration-300"
        :class="cn('', props.class)"
        :style="{
            backgroundColor: pocket.bgColor,
            color: pocket.iconColor,
        }"
        @click.stop>
        <icon
            :style="{ color: pocket.iconColor }"
            :icon="`${pocket.icon}`"
            class="size-full" />
    </button>
</template>

<style scoped></style>
