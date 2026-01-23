<script setup lang="ts">
</script>

<template>
  <UTooltip
    arrow
    :ui="{ content: 'py-0.75 px-2 transition-discrete text-[0.9rem] text-nc font-medium  data-[state=delayed-open]:animate-in data-[state=delayed-open]:slide-in-from-bottom duration-250!', arrow: 'scale-y-100 scale-x-100 ' }">
    <slot />
  </UTooltip>
</template>
