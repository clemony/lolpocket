<script setup lang="ts">
const props = defineProps<{
  set?: CalculatorSet
  index?: any
  class?: HTMLAttributes['class']
  // item?: Item
}>()

const emit = defineEmits(['update:item'])

const list = computed(() => {
  return filterItems()
})
</script>

<template>
  <PopoverClose
    v-for="item in list"
    :key="item.id"
    :class="cn('', props.class)">
    <Item
      :item="item"
      class="size-full"
      basic @click="emit('update:item', item)">
    </Item>
  </PopoverClose>
</template>

<style></style>
