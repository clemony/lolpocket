<script setup lang="ts">
const props = defineProps<{
  listKey?: number
}>()
const is = useItemStore()

const list = computed(() => {
  return filterItems()
})
</script>

<template>
  <transition-slide
    :key="props.listKey"
    group
    class="max-h-full user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(64px,1fr))] gap-5 overflow-auto px-3 rounded-lg pb-8 h-fit">
    <Item
      v-for="item in list"
      :key="item.id"
      :item="item"
      class="size-full"
      @click.right.prevent
      @click="is.selectedItem = item" />
  </transition-slide>
</template>

<style></style>
