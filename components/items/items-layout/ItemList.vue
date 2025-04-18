<script setup lang="ts">
const props = defineProps<{
  listKey?: number
  class?: HTMLAttributes['class']
}>()

const is = useItemStore()

const list = computed(() => {
  let filtered = filterDbItems()

  if (is.dbItemStats.length > 1) {
    filtered = filtered.filter((item) => {
      const stats = item.stats || {}
      return is.dbItemStats.some((stat) => {
        const val = stats[stat]
        return val !== undefined && val !== null && val !== 0
      })
    })
  }
  return filtered
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
