<script setup lang="ts">
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <label
    class="
      btn text-md btn-ghost btn-lg relative cursor-pointer justify-start
      font-medium
    "
    :class="cn('', props.class)">
    <slot />
  </label>
</template>
