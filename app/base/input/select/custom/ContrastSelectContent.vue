<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <SelectContent
    position="popper"
    :class="
      cn(
        `
          bgneutral/83 w-[var(--reka-select-trigger-width)]! rounded-xl
          border-accent text-nc backdrop-blur-lg
          **:text-nc
        `,
        props.class,
      )
    ">
    <slot />
  </SelectContent>
</template>
