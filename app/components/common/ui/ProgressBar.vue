<script lang="ts" setup>
import type { ProgressProps } from "@nuxt/ui"

const props = defineProps<ProgressProps>()

const color = computed(() =>
  props?.modelValue && props?.modelValue >= 50 ? "insp" : "dom",
)
</script>

<template>
  <UProgress
    :color="color"
    :model-value="props.modelValue"
    :size="props.size"
    :ui="{
      indicator: 'shadow-morphic-bar',
      base: 'shadow-morphic-border rounded-full border-l-1 border-l-p0 bg-transparent ring ring-p4',
      root: 'shrink-0',
    }" />
</template>
