<script lang="ts" setup>
const props = defineProps<{
  item: ItemLite
  set?: ItemSet
  pocket?: Pocket
}>()

const emit = defineEmits(['update:popover'])
</script>

<template>
  <div class="flex flex-col w-full">
    <ContrastGhostButton class="btn-sm text-2 rounded-lg pl-2.5" @click="removeItemFromSet(props.pocket, props.set, props.item)">
      <icon name="f7:delete-right" />
      Remove Item
    </ContrastGhostButton>
    <ContrastGhostButton class="btn-sm text-2 rounded-lg pl-2.5" @click="emit('update:popover', 'data')">
      <icon name="bi:clipboard-data" />
      Item Data
    </ContrastGhostButton>
  </div>
</template>