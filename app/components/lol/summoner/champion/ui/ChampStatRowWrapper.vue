<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'border-b-b3/80 inset-y-0 flex h-full min-h-full grow flex-nowrap items-center justify-start justify-items-start gap-4 overflow-x-scroll overflow-y-hidden border-b py-2.5 pr-3 pl-34',
        className,
      )
    "
  >
    <slot />
  </div>
</template>
