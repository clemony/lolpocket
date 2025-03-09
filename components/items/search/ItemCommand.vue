<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  sideOffset?: number
  i?: number
  set?: CalculatorSet
  item?: Item
  type?: string
}>()

const emit = defineEmits(['update:open', 'update:set'])

const is = useItemStore()

const isOpen = ref(false)

watchEffect(() => {
  emit('update:open', isOpen.value)
})

const item = ref(props.item)

const set = ref(props.set)
function handleItem(e) {
  item.value = e
  set.value[props.i] = e
  emit('update:set', set.value)
}
</script>

<template>
  <Popover v-model:open="isOpen">
    <ItemDisplayTrigger v-if="props.type == 'image'" :item="item" />
    <ItemSearchBoxButton v-else :is-open="isOpen">
      <slot />
    </ItemSearchBoxButton>
    <PopoverContent
      class=""
      :class="cn('w-110 rounded-lg max-h-130 overflow-auto p-0', props.class)"
      align="start" :side-offset="props.sideOffset" @open-auto-focus.prevent>
      <ItemSearch
        placeholder="Type or click a suggestion"
        input-class=" text-bc"
        class="w-full rounded-t-lg z-2 sticky top-0 left-0   shadow-none h-13 [&_svg]:size-4 bg-transparent border-b border-b-b3/60   border-x-0  border-t-0" set-focus @update:query="e => e" />

      <LazyItemCommandTags />

      <TransitionExpand>
        <div v-if="is.filterItemTypes == '' && !is.filterItemStats.length && !is.itemSearchQuery">
          <LazyItemCommandTypes />

          <Separator class="bg-b3/60 mt-3 mb-1.5 " />
          <LazyItemCommandStats />
        </div>
      </TransitionExpand>
      <TransitionExpand tag="div" class="w-full justify-center flex">
        <div v-if="is.filterItemTypes != '' || is.filterItemStats.length || is.itemSearchQuery" class="!flex flex-wrap justify-start gap-1.5 px-4 py-4 z-0">
          <LazyFilteredItems class=" !size-15  " @update:item="handleItem($event)" />
        </div>
      </TransitionExpand>
    </PopoverContent>
  </Popover>
</template>