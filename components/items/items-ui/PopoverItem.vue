<script lang="ts" setup>
const props = defineProps<{
  item: Item
}>()

const item = computed (() => props.item)

const loaded = ref(false)
</script>

<template>
  <Popover>
    <LazyPopoverTrigger class="size-full hover:ring-1 aspect-square !pointer-events-auto   !cursor-pointer shadow-sm drop-shadow-sm hover:ring-neutral hover:ring-offset-2 hover:ring-offset-b1 data-[state=open]:ring-1 data-[state=open]:ring-offset-2 data-[state=open]:ring-neutral data-[state=open]:ring-offset-b1 rounded-lg">
      <Item :layout="true" class="select-none size-full pointer-events-none relative" :item="item" @loaded="loaded = true">
      </Item>
    </LazyPopoverTrigger>
    <LazyCustomPopoverContent class="!w-100 @container/item-data max-h-160">
      <CustomPopoverArrow />
      <LazyItemData :item="item" />
    </LazyCustomPopoverContent>
  </Popover>
</template>