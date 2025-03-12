<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  champion: Champion
  pocket?: pocket
  class?: HTMLAttributes['class']
  rounded?: boolean
  removable?: boolean
  roundedMd?: boolean
  noHover?: boolean
}>()

function handleClick() {
  props.removable ? removeChamp(props.champion.name, props.pocket) : ''
}
</script>

<template>
  <label
    class="  shadow-sm btn inset-shadow-sm inset-shadow-black/20 shadow-black/20 relative rounded-xl **:select-none p-0"
    :class="
      cn(
        { '!rounded-full': props.rounded },
        props.class,
      )
    "
    @click="handleClick">
    <slot />

    <div
      v-tippy="`${champion.name}`"
      class="size-full overflow-hidden rounded-lg "
      :class="
        cn(
          { '!rounded-full': props.rounded },
          { '!rounded-md': props.roundedMd },
          { 'after:absolute after:top-0 after:left-0 after:pointer-events-none z-0 after:z-10 after:size-full after:rounded-lg after:place-items-center after:grid after:font-extralight after:opacity-0 after:text-7 after:content-[\'×\'] cursor-pointer  hover:after:opacity-100 after:bg-neutral/60 after:text-nc/80 after:transition-all after:duration-300': props.removable },
        )
      ">
      <img
        :key="props.champion.name"

        :src="`/img/champion/${champion.apiname}.webp`"
        :alt="`${props.champion.name} Image`"
        class="size-full scale-115" />
    </div>
  </label>
</template>

<style scoped></style>
