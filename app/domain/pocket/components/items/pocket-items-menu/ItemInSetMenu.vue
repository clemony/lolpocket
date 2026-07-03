<script lang="ts" setup>
import { removeItemFromSet } from "~/domain/pocket/utils/manage/handleItems"

const props = defineProps<{
  item: number
  set?: ItemSet
  pocket?: Pocket
}>()

const emit = defineEmits(["update:popover"])

function removeItem() {
  if (props.pocket && props.set) {
    removeItemFromSet(props.pocket, props.set, props.item)
  }
}
</script>

<template>
  <div class="flex w-full flex-col">
    <ContrastGhostButton
      class="rounded-lg pl-2.5 text-sm btn-sm"
      @click="removeItem">
      <icon name="f7:delete-right" />
      Remove Item
    </ContrastGhostButton>

    <ContrastGhostButton
      class="rounded-lg pl-2.5 text-sm btn-sm"
      @click="emit('update:popover', 'data')">
      <icon name="bi:clipboard-data" />
      Item Data
    </ContrastGhostButton>
  </div>
</template>
