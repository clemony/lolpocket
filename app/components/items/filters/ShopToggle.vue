<script setup lang="ts">
</script>

<template>
  <Toggle
    v-model:model-value="is().filters.purchasable"
    v-tippy="{ content: is().filters.purchasable ? 'Items purchasable in shop' : 'All items', theme: 'base', placement: 'top-end' }"
    variant="outline"
    active="neutral"
    shape="square"
    class="group/tog  relative *:transition-opacity *:duration-100  off:!bg-tint-b2/40 off:inset-shadow-sm"
    size="lg">
    <icon
      name="infinity"
      class="group-on/tog:opacity-0 absolute   **:stroke-[2]" />
    <icon
      name="tag"
      class="absolute group-off/tog:opacity-0  group-on/tog:opacity-100" />
  </Toggle>
</template>