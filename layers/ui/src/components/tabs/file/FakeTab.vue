<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li
    role="tab"
    :class="
      cn('tab-menu tab pointer-events-none relative w-0! min-w-0! grow-0! border-b-transparent! p-0!',
        className,
      )
    ">
    <slot />
  </li>
</template>
