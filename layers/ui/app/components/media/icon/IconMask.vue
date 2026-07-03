<script lang="ts" setup>
const { class: className, svg } = defineProps<{
  class?: HTMLAttributes["class"]
  svg?: string
}>()

const mask = computed(() =>
  svg ? `url("${encodeURIComponent(svg?.trim())}")` : ""
)
</script>

<template>
  <div
    :style="{
      mask: `${mask} center / contain no-repeat`,
      WebkitMask: `${mask} center / contain no-repeat`,
    }"
    :class="
      cn(
        'pointer-events-none size-4.5 mask-intersect',

        className
      )
    "></div>
</template>
