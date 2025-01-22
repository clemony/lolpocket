<script setup lang="ts">
  const ts = useTempStore()
  const ds = useDataStore()
  const props = defineProps<{
    key: number
  }>()

  const list = computed(() => {
    return useItemFilter()
  })
</script>
<template>
  <transition-slide
    :key="props.key"
    group
    class="max-h-full user-select-none grid grid-flow-row grid-cols-[repeat(auto-fill,minmax(64px,1fr))] gap-5 overflow-auto px-3 rounded-lg pb-8 h-fit">
    <Item
      v-for="(item, i) in list"
      :key="item.id"
      :item="item"
      @click.right.prevent
      @click="ts.selectedItem = item"
      ref="el"
      class="size-full" />
  </transition-slide>
</template>

<style></style>
