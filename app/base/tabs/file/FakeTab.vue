<script lang="ts" setup>
const { class: className } = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <li
    role="tab"
    :class="cn('tab  tab tab-menu relative pointer-events-none !p-0 !w-0 !min-w-0 !grow-0 !border-b-transparent', className)">
    <slot />
  </li>
</template>