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

const isOpen = ref(false)

watchEffect(() => {
  emit('update:open', isOpen.value)
})

const setRef = computed(() => props.set)
function handleItem(e: number) {
  if (props.setIndex == null || !setRef.value) return
  setRef.value[props.setIndex] = e
  emit('update:set', setRef.value)
}
const { filtered, filters, setFilter } = useItemFilter() as any
</script>

<template>
  <Popover
    v-model:open="isOpen"
    @click.stop.prevent>
    <ItemDisplayTrigger
      v-if="props.type === 'image'"
      :item-id="itemId ?? null" />

    <CustomPopoverContent
      class=""
      :class="
        cn(
          'max-h-130 w-110 overflow-auto rounded-lg border-b-6 p-0',
          props.class,
        )
      "
      align="start"
      :side-offset="props.sideOffset"
      @open-auto-focus.prevent>
      <ItemSearch
        class="borderneutral/30 sticky top-0 left-0 z-2 h-13 w-full rounded-t-lg border-4 bg-accent! shadow-none **:text-nc! [&_svg]:size-4"
        placeholder="Type or click a suggestion"
        input-class=" text-nc"
        set-focus
        @update:query="(e) => e" />

      <div class="z-0 size-full">
        <LazyItemCommandTags />

        <TransitionExpand>
          <div
            v-if="
              filters.rank === '' && !filters.stats.length && !filters.query
            ">
            <LazyItemCommandTypes />

            <Separator class="mt-3 mb-1.5 bg-accent" />

            <LazyItemCommandStats />
          </div>
        </TransitionExpand>

        <TransitionExpand
          class="flex w-full justify-center"
          tag="div">
          <div
            v-if="filters.rank !== '' || filters.stats.length || filters.query"
            class="z-0 flex! flex-wrap justify-center gap-1.5 p-4">
            <LazyCalculatorFilteredItems
              class="z-0 size-15!"
              @update:item="handleItem($event)" />
          </div>
        </TransitionExpand>
      </div>
    </CustomPopoverContent>
  </UPopover>
</template>
