<script lang="ts" setup>
const props = defineProps<{
  item: Item
}>()

const item = computed (() => props.item)

const loaded = ref(false)

const trigger = ref(null)
const isHovered = useElementHover(trigger)
const isOpen = ref(false)
</script>

<template>
  <Popover v-model:open="isOpen">
    <LazyPopoverTrigger ref="trigger" class="size-full hover:ring-1 aspect-square !pointer-events-auto relative group/item  !cursor-pointer shadow-sm drop-shadow-sm hover:ring-neutral hover:ring-offset-2 hover:ring-offset-b1 data-[state=open]:ring-1 data-[state=open]:ring-offset-2 data-[state=open]:ring-neutral data-[state=open]:ring-offset-b1 rounded-lg">
      <Item :layout="true" class="select-none size-full z-0 pointer-events-none relative" :item="item" @loaded="loaded = true">
      </Item>

      <LazyPrismaticShine v-if="isOpen || isHovered" class="absolute scale-107 top-0 left-0 z-1" />
    </LazyPopoverTrigger>
    <LazyCustomPopoverContent class="!w-100 @container/item-data max-h-160">
      <CustomPopoverArrow />
      <LazyItemData :item="item" />
    </LazyCustomPopoverContent>
  </Popover>
</template>