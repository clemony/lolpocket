<script lang="ts" setup>
const props = defineProps<{
item: Item
set?: ItemSet
pocket?: pocket
}>()

const emit = defineEmits(['update:popover'])
</script>

<template>
  <div class="flex flex-col w-full">
  <ContrastGhostButton @click="removeItemFromSet(props.pocket, props.set, props.item)" class="btn-sm text-2 rounded-lg pl-2.5">
    <icon name="f7:delete-right" />
    Remove Item
  </ContrastGhostButton>
  <ContrastGhostButton @click="emit('update:popover', 'data')" class="btn-sm text-2 rounded-lg pl-2.5">
    <icon name="bi:clipboard-data" />
    Item Data
  </ContrastGhostButton>
  </div>
</template>