<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <footer
    class=""
    :class="
      cn(
        'bg-neutralsm:footer-horizontal z-0 flex h-26 max-h-26 min-h-26 w-full items-center gap-12 p-6',
        className,
      )
    "
  >
    <aside class="flex grow items-center gap-5" />
  </footer>
</template>
