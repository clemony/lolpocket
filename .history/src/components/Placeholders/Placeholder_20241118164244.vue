<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
    size?: number
    width?: number
    height?: number
    icon?: string
    img?: string
    class?: HTMLAttributes['class']
    iClass?: HTMLAttributes['class']
}>()

const size = props.size + 'px'
</script>

<template>
    <div
        :class="
            cn(
                'group flex aspect-square cursor-pointer items-center justify-center gap-2 self-center rounded-full border border-base-200 bg-base-200/30 opacity-70 shadow-sm transition-all duration-300 hover:border-base-300 hover:opacity-70 hover:shadow-inner',
                props.class
            )
        "
        :style="{
            height: size || width + 'px',
            width: size || height + 'px',
        }">
        <icon
            v-if="props.icon == 'plus'"
            icon="teenyicons:add-outline"
            class="group-hover:stroke-[1.5]" />
        <img v-if="props.img" :src="props.img" :class="cn('', props.iClass)" />
        <slot />
    </div>
</template>

<style scoped></style>
