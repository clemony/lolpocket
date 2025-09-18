<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  sideOffset?: number
  setIndex?: number
  set?: CalculatorSet
  itemId?: number
  type?: string
}>()

const emit = defineEmits(['update:open', 'update:set'])

const is = useItemStore()
const isOpen = ref(false)

watchEffect(() => {
  emit('update:open', isOpen.value)
})

const set = computed(() => set)
function handleItem(e) {
  set.value[props.setIndex] = e
  emit('update:set', set.value)
}
const { filtered, filters, setFilter } = useItemFilter()
</script>

<template>
  <Popover
    v-model:open="isOpen"
    @click.stop.prevent>
    <ItemDisplayTrigger
      v-if="props.type == 'image'"
      :item-id="itemId" />

    <CustomPopoverContent
      class=""
      :class="
        cn(
          'w-110 rounded-lg max-h-130 overflow-auto p-0 border-b-6',
          props.class,
        )
      "
      align="start"
      :side-offset="props.sideOffset"
      @open-auto-focui.prevent>
      <ItemSearch
        placeholder="Type or click a suggestion"
        input-class=" text-nc"
        class="w-full rounded-t-lg z-2 sticky top-0 left-0 shadow-none h-13 [&_svg]:size-4 **:!text-nc !bg-accent borderneutral/30 border-4"
        set-focus
        @update:query="(e) => e" />

      <div class="z-0 size-full">
        <LazyItemCommandTags />

        <TransitionExpand>
          <div
            v-if="
              filters.rank == '' && !filters.stats.length && !filters.query
            ">
            <LazyItemCommandTypes />

            <Separator class="bg-accent mt-3 mb-1.5" />

            <LazyItemCommandStats />
          </div>
        </TransitionExpand>

        <TransitionExpand
          tag="div"
          class="w-full justify-center flex">
          <div
            v-if="filters.rank != '' || filters.stats.length || filters.query"
            class="!flex flex-wrap justify-center gap-1.5 px-4 py-4 z-0">
            <LazyCalculatorFilteredItems
              class="!size-15 z-0"
              @update:item="handleItem($event)" />
          </div>
        </TransitionExpand>
      </div>
    </CustomPopoverContent>
  </Popover>
</template>
