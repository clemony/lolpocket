<script setup lang="ts">
const props = defineProps<{
  item: Item
    class?: HTMLAttributes['class']
    basic?: boolean
}>()
const is = useItemStore()
const thisItem = computed(() => {
  return props.item
})
</script>

<template>
  <label
    class="" :class="cn({'shadow-sm ring-b2 hover:ring-neutral/60 hover:ring-offset-b1/95 relative rounded-lg border border-b3 inset-shadow-sm ring-1 hover:ring-offset-2 aspect-square has-checked:ring-neutral  bg-b2 has-checked:ring-1 has-checked:ring-offset-b1/95 has-checked:ring-offset-2 has-checked:shadow-pretty has-checked:scale-105 transition-all duration-300 cursor-pointer ': !props.basic}, props.class)">

    <input
      v-model="is.selectedItem"
      type="radio"
      :value="item"
      class="hidden" />

    <img
      v-if="item.name != ''"
      :src="`/img/item/${thisItem.id}.webp`"
      :alt="`${thisItem.name} Image`"
      class="aspect-square size-full rounded-lg" />

    <slot />
  </label>
</template>

<style scoped></style>
