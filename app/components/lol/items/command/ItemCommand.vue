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

const set = computed(() => set)
function handleItem(e) {
  set.value[props.setIndex] = e
  emit('update:set', set.value)
}
const { filtered, filters, setFilter } = useItemFilter()
</script>

<template>
  <Popover v-model:open="isOpen" @click.stop.prevent>
    <ItemDisplayTrigger v-if="props.type === 'image'" :item-id="itemId" />

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
      @open-auto-focus.prevent
    >
      <ItemSearch
        class="borderneutral/30 bg-accent! **:text-nc! sticky top-0 left-0 z-2 h-13 w-full rounded-t-lg border-4 shadow-none [&_svg]:size-4"
        placeholder="Type or click a suggestion"
        input-class=" text-nc"
        set-focus
        @update:query="(e) => e"
      />

      <div class="z-0 size-full">
        <LazyItemCommandTags />

        <TransitionExpand>
          <div
            v-if="
              filters.rank === '' && !filters.stats.length && !filters.query
            "
          >
            <LazyItemCommandTypes />

            <Separator class="bg-accent mt-3 mb-1.5" />

            <LazyItemCommandStats />
          </div>
        </TransitionExpand>

        <TransitionExpand class="flex w-full justify-center" tag="div">
          <div
            v-if="filters.rank !== '' || filters.stats.length || filters.query"
            class="z-0 flex! flex-wrap justify-center gap-1.5 p-4"
          >
            <LazyCalculatorFilteredItems
              class="z-0 size-15!"
              @update:item="handleItem($event)"
            />
          </div>
        </TransitionExpand>
      </div>
    </CustomPopoverContent>
  </Popover>
</template>
