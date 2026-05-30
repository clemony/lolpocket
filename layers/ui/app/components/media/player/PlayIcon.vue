<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes["class"]
}>()

const playMaskSvg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="black"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m8.528-4.882a1 1 0 0 1 1.027.05l6 4a1 1 0 0 1 0 1.664l-6 4A1 1 0 0 1 9 16V8a1 1 0 0 1 .528-.882"
    />
  </svg>
`.trim()

const playMask = `url("data:image/svg+xml,${encodeURIComponent(playMaskSvg)}")`
</script>

<template>
  <div
    :style="{
      mask: `${playMask} center / contain no-repeat`,
      WebkitMask: `${playMask} center / contain no-repeat`
    }"
    :class="
      cn(
        'pointer-events-none absolute z-1 size-12 place-self-center bg-nc ring drop-shadow-sm group-hover/card:opacity-80',

        className
      )
    "></div>
</template>

<style scoped></style>
