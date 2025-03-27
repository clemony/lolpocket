<script setup lang="ts">
const props = defineProps<{
  listKey?: number
  class?: HTMLAttributes['class']
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
    :class="cn('user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(60px,1fr))] gap-5   rounded-lg  ', props.class)">
    <LazyItem
      v-for="item in list"
      :key="item.id"
      :item="item"
      class=""
      hydrate-on-visible
      @click.right.prevent @click="is.selectedDatabaseItem = item" />
  </transition-slide>
</template>

<style></style>
