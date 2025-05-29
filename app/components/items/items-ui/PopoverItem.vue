<script lang="ts" setup>
const { id, class: className } = defineProps<{
  id: ItemId
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['loaded'])

const loaded = ref(false)
function onLoad() {
  loaded.value = true
  emit('loaded')
}
const trigger = ref(null)
const isHovered = useElementHover(trigger)
const isOpen = ref(false)

defineOptions({
inheritAttrs: false
})
</script>

<template>
  <div>
 <Popover
    v-model:open="isOpen">
    <PopoverTrigger
      ref="trigger" v-bind="$attrs" :class="cn({ 'hover:ring-1 !pointer-events-auto group/item   !cursor-pointer shadow-sm drop-shadow-sm hover:ring-neutral hover:ring-offset-2 hover:ring-offset-b1 data-[state=open]:ring-1 data-[state=open]:ring-offset-2 data-[state=open]:ring-neutral data-[state=open]:ring-offset-b1': loaded}, className)">
    <Item
            :id="id"
            :quality="40"
            :src="`/img/item/${id}.webp`"
            alt="Item Image"
            class="rounded-lg opacity-96 size-full rounded-lg select-none size-full z-0 pointer-events-none relative" @loaded="onLoad()" />
 <LazyPrismaticShine v-if="isOpen || isHovered" class="absolute scale-107 top-0 left-0 z-1" hydrate-on-interact />
    </PopoverTrigger>
    <LazyPopperPopoverContent v-if="isOpen" :side-offset="8" class="!w-110  max-h-[420px] bg-blend-overlay">
      <LazyItemData :id="id" hydrate-on-interact />
    </LazyPopperPopoverContent>
  </Popover>
</div>
</template>