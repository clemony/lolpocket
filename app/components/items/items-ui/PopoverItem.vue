<script lang="ts" setup>
const { id, name, class: className } = defineProps<{
  id: number
  name: string
  class?: HTMLAttributes['class']
}>()

const loaded = ref(false)

const trigger = ref(null)
const isHovered = useElementHover(trigger)
const isOpen = ref(false)
</script>

<template>
  <Popover v-model:open="isOpen">
    <LazyPopoverTrigger ref="trigger" :class="cn({ 'size-full hover:ring-1 aspect-square !pointer-events-auto relative group/item  !cursor-pointer shadow-sm drop-shadow-sm hover:ring-neutral hover:ring-offset-2 hover:ring-offset-b1 data-[state=open]:ring-1 data-[state=open]:ring-offset-2 data-[state=open]:ring-neutral data-[state=open]:ring-offset-b1 rounded-lg': loaded == true }, className)">
      <Item :id="id" :layout="true" class="select-none size-full z-0 pointer-events-none relative" :name="name" @loaded="loaded = true">
      </Item>

      <LazyPrismaticShine v-if="isOpen || isHovered" class="absolute scale-107 top-0 left-0 z-1" />
    </LazyPopoverTrigger>
    <LazyCustomPopoverContent :side-offset="8" class="!w-100 @container/item-data max-h-160">
      <CustomPopoverArrow />
      <LazyItemData :id="id" />
    </LazyCustomPopoverContent>
  </Popover>
</template>