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
                'shadow-warm pointer-events-none relative grid size-12 shrink-0 place-items-center transition-all duration-300',
                props.class
            )
        ">
        <div
            v-if="iconImg"
            :class="
                cn(
                    'grid size-full place-items-center overflow-hidden rounded-full',
                    props.iconClass
                )
            "
            :style="{
                backgroundColor: pocket.bgColor,
                color: pocket.iconColor,
            }">
            <img
                :src="pocket.icon"
                :class="cn('scale-[115%]', props.imgClass)" />
        </div>

        <div
            v-else
            :class="
                cn(
                    'grid size-full place-items-center overflow-hidden rounded-full',
                    props.iconClass
                )
            "
            class="!p-1.25"
            :style="{
                backgroundColor: pocket.bgColor,
                color: pocket.iconColor,
            }">
            <icon
                :style="{ color: pocket.iconColor }"
                :icon="`${pocket.icon}`"
                class="size-full object-contain" />
        </div>
    </div>
</template>

<style scoped></style>
