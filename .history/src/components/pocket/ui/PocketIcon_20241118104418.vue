<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import type { pocket } from 'types'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    pocket: pocket
    class?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const regex = /\.webp/g
const iconImg = computed(() => {
    const match = pocket.value.icon.match(regex) ? true : false
    return match
})
</script>

<template>
    <button
        v-if="pocket"
        :class="
            cn(
                'shadow-war, pointer-events-none relative grid size-12 place-items-center border border-transparent transition-all duration-300',
                props.class
            )
        "
        :style="{
            backgroundColor: pocket.bgColor,
            color: pocket.iconColor,
        }"
        @click.stop>
        <img
            v-if="iconImg"
            :src="pocket.icon"
            class="scale-110 overflow-hidden rounded-full" />
        <icon
            v-else
            :style="{ color: pocket.iconColor }"
            :icon="`${pocket.icon}`"
            class="size-full p-2" />
    </button>
</template>

<style scoped></style>
