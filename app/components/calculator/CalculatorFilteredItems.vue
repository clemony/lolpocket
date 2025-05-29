<script setup lang="ts">
const props = defineProps<{
  set?: CalculatorSet
  index?: any
  class?: HTMLAttributes['class']
  // item?: Item
}>()

const emit = defineEmits(['update:item'])
const is = useItemStore()
const { filtered } = useItemFilter(is.itemFilter)
</script>

<template>
  <PopoverClose
    v-for="item in filtered"
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
