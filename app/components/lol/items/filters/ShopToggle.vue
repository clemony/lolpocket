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
    class="
      group/tog off:bg-tint-b2/40! off:inset-shadow-sm relative *:transition-opacity
      *:duration-100
    "
    size="12">
    <icon
      name="infinity"
      class="group-on/tog:opacity-0 absolute size-4.5 **:stroke-2" />
    <icon
      name="tag"
      class="
        group-on/tog:opacity-100 group-off/tog:opacity-0 absolute size-4.75
      " />
  </Toggle>
</template>
