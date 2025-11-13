<script setup lang="ts"></script>

<template>
  <Toggle
    v-model:model-value="is().filters.purchasable"
    v-tippy="{
      content: is().filters.purchasable
        ? 'Items purchasable in shop'
        : 'All items',
      theme: 'base',
      placement: 'top-end',
    }"
    variant="outline"
    on="neutral"
    class="group/tog relative *:transition-opacity *:duration-100 off:bg-tint-b2/40! off:inset-shadow-sm"
    size="12"
  >
    <icon
      name="infinity"
      class="absolute size-4.5 **:stroke-[2] group-on/tog:opacity-0"
    />
    <icon
      name="tag"
      class="absolute size-4.75 group-on/tog:opacity-100 group-off/tog:opacity-0"
    />
  </Toggle>
</template>
