<script lang="ts" setup>
const props = defineProps<{
  pocket: pocket
}>()

const pocket = computed (() => {
  return props.pocket
})
const coreItem = computed (() => {
  return pocket.value.items.default.items
})
</script>

<template>
  <div class="px-3">
    <RightbarButton class="" @click="newItemSet(pocket.key)">
      <icon name="add-sm" />
      Add Item Set
    </RightbarButton>
  </div>
</template>