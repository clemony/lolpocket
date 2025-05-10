<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
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
    <NavBtn class="" @click="newItemSet(pocket.key)">
      <icon name="add-sm" />
      Add Item Set
    </NavBtn>
  </div>
</template>