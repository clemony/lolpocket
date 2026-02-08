<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn('flex size-9 items-center justify-center', props.class)">
    <slot>
      <icon
        class="size-4"
        name="more" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
