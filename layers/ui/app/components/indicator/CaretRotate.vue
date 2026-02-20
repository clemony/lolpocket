<script lang="ts" setup>
const { class: className, side = "right" } = defineProps<{
  class?: HTMLAttributes["class"]
  side?: Side
}>()

const sideClass = computed(() =>
  side === "right"
    ? " group-data-[state=open]/collapse:rotate-90"
    : side === "left"
      ? " group-data-[state=open]/collapse:-rotate-90 "
      : ""
)
</script>

<template>
  <Icon
    :name="side"
    :class="
      cn(
        'transition-rotate size-4.5 rotate-180 stroke-[2.6] duration-150 **:text-pc/50 group-hover/collapse:text-pc',
        sideClass,
        className
      )
    " />
</template>
