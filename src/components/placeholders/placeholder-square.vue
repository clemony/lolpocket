<script setup lang="ts">
const props = defineProps<{
    size?: number
    width?: number
    height?: number
    icon?: string
    noHover?: boolean
}>()

const size = props.size + 'px'
</script>

<template>
<div class="group flex aspect-square  shrink-0 cursor-pointer items-center justify-center  !justify-self-start rounded-md border border-base-200 bg-base-200/30 opacity-70 shadow-sm transition-all duration-300"
    :class="{ 'hover:border-base-300 hover:opacity-70 hover:shadow-inner group-hover:border-base-300 group-hover:opacity-70 group-hover:shadow-inner': !props.noHover }"
    :style="{
        height: size || width + 'px',
        width: size || height + 'px',
    }">
    <icon v-if="props.icon == 'plus'" icon="teenyicons:add-outline" class="group-hover:stroke-[1.5]" />
</div>
</template>

<style scoped></style>