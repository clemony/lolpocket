<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  label?: string
}>()
</script>

<template>
  <div
    class=""
    :class="cn('radial-progress text-b3 size-22 after:hidden', props.class)"
    style="--value: 100"
    role="progressbar">
    <span class="text-bc/60 font-medium">
      {{ props.label }}
    </span>
  </div>
</template>
