<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { id, class: className } = defineProps<{
  id: number
  class?: HTMLAttributes['class']
}>()

const emit = defineEmits(['loaded'])

const loaded = ref<boolean>(false)

const trigger = useTemplateRef<HTMLElement>('trigger')
const isHovered = useElementHover(trigger)
const isOpen = ref<boolean>(false)
</script>

<template>
  <Popover
    v-slot="open"
    v-model:open="isOpen">
    <PopoverTrigger
      v-bind="$attrs"
      ref="trigger"
      color="neutral"
      :class="cn('group/item rounded-lg', className)">
      <Item
        :id="id"
        class="pointer-events-none absolute top-0 left-0 z-0 size-full opacity-96"
        :quality="100"
        alt="Item Image">
        <LazyPrismaticShine v-if="isOpen || isHovered" />
      </Item>
      <slot :open />
    </PopoverTrigger>

    <LazyPopperPopoverContent
      class="max-h-140 w-100! min-w-110 px-0 py-2 inset-shadow-xs"
      :side-offset="8">
      <LazyItemData
        v-if="open"
        :id="id" />
    </LazyPopperPopoverContent>
  </Popover>
</template>
