<script setup lang="ts">
const props = defineProps<{
  set?: CalculatorSet
  index?: any
  class?: HTMLAttributes['class']
  // item?: Item
}>()

const emit = defineEmits(['update:item'])
const is = useItemStore()
const { filters, setFilter, filtered } = useItemFilter()
</script>

<template>
  <PopoverClose
    v-for="item in filtered"
    :key="item"
    :class="cn('', props.class)">
    <Item
      :id="item"
      class="size-full"
      basic
      @click="emit('update:item', item)">
    </Item>
  </PopoverClose>
</template>

<style></style>
