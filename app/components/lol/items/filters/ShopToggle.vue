<script setup lang="ts"></script>

<template>
  <Toggle
    v-model:model-value="is().filters.purchasable"
    v-tippy="{
      content:
        is().filters.purchasable ? 'Items purchasable in shop' : 'All items',
      theme: 'base',
      placement: 'top-end',
    }"
    class="group/tog relative *:transition-opacity *:duration-100 off:bg-tint-p2/40! off:inset-shadow-sm"
    variant="outline"
    on="neutral"
    size="12">
    <icon
      class="absolute size-4.5 **:stroke-2 group-on/tog:opacity-0"
      name="infinity" />
    <icon
      class="absolute size-4.75 group-on/tog:opacity-100 group-off/tog:opacity-0"
      name="tag" />
  </Toggle>
</template>
