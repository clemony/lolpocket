<script lang="ts" setup>
import { removeItemFromSet } from "~/domain/pocket/handleItems"

const props = defineProps<{
  item: number
  set?: ItemSet
  pocket?: Pocket
}>()

const emit = defineEmits(["update:popover"])
</script>

<template>
  <div class="flex w-full flex-col">
    <ContrastGhostButton
      class="rounded-lg pl-2.5 text-sm btn-sm"
      @click="
        props.pocket && props.set
          ? removeItemFromSet(props.pocket, props.set, props.item)
          : null
      ">
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
