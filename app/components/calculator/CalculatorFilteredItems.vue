<script setup lang="ts">
const props = defineProps<{
  set?: CalculatorSet
  index?: any
  class?: HTMLAttributes['class']
  // item?: Item
}>()

const emit = defineEmits(['update:item'])
const { data } = await useFetch('/api/items-lite.json')
const is = useItemStore()
const { filteredItems } = useItemFilter(data.value as ItemLite[], is.cItemFilter)
</script>

<template>
  <PopoverClose
    v-for="item in filteredItems"
    :key="item.id"
    :class="cn('', props.class)">
    <Item
      :id="item.id"
      :name="item.name"
      class="size-full"
      basic @click="emit('update:item', item)">
    </Item>
  </PopoverClose>
</template>

<style></style>
