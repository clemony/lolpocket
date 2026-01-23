<script lang="ts" setup>
const props = defineProps<{
  item: ItemId
  set?: ItemSet
  pocket?: Pocket
}>()

const emit = defineEmits(['update:popover'])
</script>

<template>
  <div class="flex w-full flex-col">
    <ContrastGhostButton
      class="btn-sm rounded-lg pl-2.5 text-sm"
      @click="removeItemFromSet(props.pocket, props.set, props.item)">
      <icon name="f7:delete-right" />
      Remove Item
    </ContrastGhostButton>

    <ContrastGhostButton
      class="btn-sm rounded-lg pl-2.5 text-sm"
      @click="emit('update:popover', 'data')">
      <icon name="bi:clipboard-data" />
      Item Data
    </ContrastGhostButton>
  </div>
</template>
