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
    class="" :class="cn({ ' relative rounded-lg   aspect-square  ': !props.basic }, props.class)">

    <Image
      v-if="item.name != ''"
      :image="`/img/item/${thisItem.id}.webp`"
      :alt="`${thisItem.name} Image`"
      class="aspect-square size-full rounded-lg" />

    <slot />
  </label>
</template>

<style scoped></style>
