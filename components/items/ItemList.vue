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
 :class="cn('user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(64px,1fr))] gap-5   rounded-lg  ', props.class)">
    <Item
      v-for="item in list"
      :key="item.id"
      :item="item"
      class=""
      @click.right.prevent
      @click="is.selectedItem = item" />
  </transition-slide>
</template>

<style></style>
