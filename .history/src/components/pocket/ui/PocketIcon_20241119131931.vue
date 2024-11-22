<script setup lang="ts">
import { usePocketStore } from '@/stores/pocketStore'
import type { pocket } from 'types'
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    pocket: pocket
    class?: HTMLAttributes['class']
    imgClass?: HTMLAttributes['class']
    iconClass?: HTMLAttributes['class']
}>()

const pocket = ref(props.pocket)

const regex = /\.webp/g
const iconImg = computed(() => {
    const match = pocket.value.icon.match(regex) ? true : false
    return match
})
</script>

<template>
    <div
        v-if="pocket"
        :class="
            cn(
                'shadow-warm, pointer-events-none relative grid size-12 place-items-center border border-transparent transition-all duration-300',
                props.class
            )
        ">
        <img
            v-if="iconImg"
            :src="pocket.icon"
            :class="cn('scale-110', props.imgClass)" />
        <div
            v-else
            :class="cn('overflow-hidden rounded-full p-2', props.iconClass)"
            :style="{
                backgroundColor: pocket.bgColor,
                color: pocket.iconColor,
            }">
            <icon
                :style="{ color: pocket.iconColor }"
                :icon="`${pocket.icon}`"
                class="size-full" />
        </div>
    </div>
</template>

<style scoped></style>
