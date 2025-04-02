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
  <LayoutGroup>
    <div
      :class="cn('user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-5  h-auto pt-1  rounded-lg  ', props.class)">
      <template v-for="item in list" :key="item.id">
        <PopoverItem :item="item" />
      </template>
    </div>
  </LayoutGroup>
</template>

<style></style>
