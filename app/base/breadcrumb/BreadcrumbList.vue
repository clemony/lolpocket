<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <ol
    :class="
      cn(
        'flex flex-wrap items-center gap-1.5 break-words text-3 text-bc/50 sm:gap-2.5',
        props.class,
      )
    ">
    <slot />
  </ol>
</template>
