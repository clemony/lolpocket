<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  sideOffset?: number
  i?: number
  set?: CalculatorSet
  item?: ItemIndex
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
  <Popover v-model:open="isOpen" @click.stop.prevent>
    <ItemDisplayTrigger v-if="props.type == 'image'" :item="item" />
    <CustomPopoverContent
      class=""
      :class="cn('w-110 rounded-lg max-h-130 overflow-auto p-0 border-b-6', props.class)"
      align="start" :side-offset="props.sideOffset" @open-auto-focus.prevent>
      <ItemSearch
        placeholder="Type or click a suggestion"
        input-class=" text-nc"
        class="w-full rounded-t-lg z-2 sticky top-0 left-0   shadow-none h-13 [&_svg]:size-4 **:!text-nc !bg-accent border-neutral/30 border-4" set-focus @update:query="e => e" />
      <div class="z-0 size-full ">
        <LazyItemCommandTags />

        <TransitionExpand>
          <div v-if="is.pItemFilter.rank == '' && !is.pItemFilter.stats.length && !is.pItemFilter.query">
            <LazyItemCommandTypes />

            <Separator class="bg-accent mt-3 mb-1.5 " />
            <LazyItemCommandStats />
          </div>
        </TransitionExpand>
        <TransitionExpand tag="div" class="w-full justify-center flex">
          <div v-if="is.pItemFilter.rank != '' || is.pItemFilter.stats.length || is.pItemFilter.query" class="!flex flex-wrap justify-center gap-1.5 px-4 py-4 z-0">
            <LazyCalculatorFilteredItems class=" !size-15  z-0" @update:item="handleItem($event)" />
          </div>
        </TransitionExpand>
      </div>
    </CustomPopoverContent>
  </Popover>
</template>