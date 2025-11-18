<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <menu
    class=""
    :class="
      cn('grid h-90 w-160 grid-cols-2 grid-rows-2 place-items-center gap-x-6 gap-y-3 overflow-hidden p-4',
        className,
      )
    ">
    <slot />
  </menu>
</template>
