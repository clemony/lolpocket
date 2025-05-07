<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button  :class="cn('btn btn-ghost hover:bg-accent text-nc hover:text-nc justify-start text-normal **:text-nc **:hover:text-nc gap-3', props.class)">
    <slot  />
  </button>
</template>