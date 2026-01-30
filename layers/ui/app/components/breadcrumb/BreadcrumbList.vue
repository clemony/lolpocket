<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ol
    :class="
      cn(
        'text-md text-bc/50 flex flex-wrap items-center gap-1.5 wrap-break-word sm:gap-2.5',
        props.class,
      )
    "
  >
    <slot />
  </ol>
</template>
