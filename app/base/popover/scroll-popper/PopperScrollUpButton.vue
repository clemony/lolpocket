<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button
    :class="cn('flex absolute top-0 left-0 w-[calc(100%-16px)] cursor-default items-center justify-center py-1 z-10 bg-b1', props.class)">
    <slot>
      <icon
        name="up-sm"
        class="size-6 ml-5.25" />
    </slot>
  </button>
</template>