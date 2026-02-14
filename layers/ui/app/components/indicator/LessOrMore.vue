<script setup lang="ts">
const { class: className, open } = defineProps<{
  class?: HTMLAttributes["class"]
  open: boolean
}>()
</script>

<template>
  <UButton
    :class="
      cn(
        'mt-2 inline px-2 text-end text-xs opacity-50 hover:opacity-100',
        className
      )
    ">
    <span class="align-bottom">{{ open ? "less" : "more" }}</span>

    <span
      class="grid size-4.5 place-items-center align-baseline font-mono -tracking-[2.5px]">
      [{{ open ? "-" : "+" }}]
    </span>
  </UButton>
</template>
