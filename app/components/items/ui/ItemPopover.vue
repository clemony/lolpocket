<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
})

const { id, class: className } = defineProps<{
  id: ItemId
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
      ref="trigger"
      v-bind="$attrs"
      :class="
        cn(
          'relative transition-all duration-200 hover:ring-neutral hover:ring hover:ring-offset-2 hover:ring-offset-b1 data-[state=open]:ring-1 aspect-square  data-[state=open]:ring-offset-2 data-[state=open]:ring-neutral data-[state=open]:ring-offset-b1 rounded-lg  group/item',
          className,
        )
      ">
      <div class="size-full relative">
        <Item
          :id="id"
          :quality="100"
          alt="Item Image"
          class="opacity-96 size-full z-0 pointer-events-none absolute top-0 left-0 z-0">
          <LazyPrismaticShine
            v-if="isOpen || isHovered" />
        </Item>
        <slot :open />
      </div>
    </PopoverTrigger>

    <LazyPopperPopoverContent
      :side-offset="8"
      class="!w-100 py-2 px-0 max-h-[420px] inset-shadow-xs min-w-110">
      <LazyItemData
        v-if="open"
        :id="id" />
    </LazyPopperPopoverContent>
  </Popover>
</template>
