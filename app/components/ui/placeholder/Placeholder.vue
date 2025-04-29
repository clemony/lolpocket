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

const size = `${props.size}px`
</script>

<template>
  <div
    :class="cn('group pointer-events-none size-full items-center justify-center gap-2 self-center  aspect-square btn btn-square  ', props.class)"
    :style="{
      height: size || `${width}px`,
      width: size || `${height}px`,
    }"
  >
    <icon
      v-if="props.icon == 'plus'"
      name="teenyicons:add-outline"
      class="group-hover:stroke-[1.5]"
    />
    <img
      v-if="props.img"
      :src="props.img"
      :class="cn('', props.iClass)"
    />
    <slot />
  </div>
</template>

<style scoped></style>
