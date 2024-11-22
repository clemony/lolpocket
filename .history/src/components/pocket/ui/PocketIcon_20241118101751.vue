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
const icon = computed(() => {
    return pocket.value.icon.match(regex) ? true : false
})
</script>

<template>
    <button
        v-if="pocket"
        :class="
            cn(
                'pointer-events-none relative grid size-12 place-items-center rounded-full border border-transparent shadow-sm transition-all duration-300',
                props.class
            )
        "
        :style="{
            backgroundColor: pocket.bgColor,
            color: pocket.iconColor,
        }"
        @click.stop>
        <img v-if="icon" :src="pocket.icon" />
        <icon
            v-else
            :style="{ color: pocket.iconColor }"
            :icon="`${pocket.icon}`"
            class="size-full" />
    </button>
</template>

<style scoped></style>
