<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <button
    :class="
      cn('bg-b1 absolute top-0 left-0 z-10 flex w-[calc(100%-16px)] cursor-default items-center justify-center py-1',
         props.class,
      )
    ">
    <slot>
      <icon
        name="up"
        class="ml-5.25 size-6" />
    </slot>
  </button>
</template>
