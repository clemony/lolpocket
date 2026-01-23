<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectContent
    position="popper"
    :class="
      cn('bgneutral/83 border-accent text-nc **:text-nc w-(--reka-select-trigger-width)! rounded-xl backdrop-blur-lg',
         props.class,
      )
    ">
    <slot />
  </SelectContent>
</template>
