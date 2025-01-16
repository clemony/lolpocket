<script setup lang="ts">
  const ts = useTempStore()
  ts.selectedItem = ref()
</script>
<template>
  <transition-slide
    group
    class="max-h-full user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(62px,1fr))] gap-4 overflow-auto px-3 rounded-lg pb-8 h-fit">
    <Item
      v-for="(item, i) in useItemFilter()"
      :key="item.id"
      :item="item"
      @click.right.prevent
      @click="ts.selectedItem = item"
      ref="el"
      class="size-full shadow-sm" />
  </transition-slide>
</template>

<style></style>
