<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  sideOffset?: number
  type?: string
  pocket: pocket
}>()

const is = useItemStore()
const emit = defineEmits(['update:open'])

const isOpen = ref(false)

watchEffect(() => {
  emit('update:open', isOpen.value)
})

const hasData = computed (() => {
console.log("💠 - hasData - is.filterItemStats.length:", is.filterItemStats.length)
console.log("💠 - hasData - is.filterItemTypes:", is.filterItemTypes)
console.log("💠 - hasData - is.filterItemCats.length:", is.filterItemCats.length)
console.log("💠 - hasData - is.AZmodel:", is.AZmodel)
console.log("💠 - hasData - is.priceModel:", is.priceModel)
return is.filterItemStats.length ||
is.filterItemTypes != null ||
is.filterItemCats.length ||
is.AZmodel != 0 ||
is.priceModel != 0
})
console.log("💠 - hasData - hasData:", hasData)
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger class="btn btn-neutral flex items-center px-4 relative">
      <icon name="search-bold" class="text-nc shrink-0" />
      <StatusIndicator v-if="hasData" class="-top-1 -right-0.75" />
    </PopoverTrigger>
    <CustomPopoverContent
      class=""
      :class="cn('w-140 rounded-lg h-130  p-0', props.class)"
      align="start" :side-offset="2" side="left" @open-auto-focus.prevent>
      <ItemSearch
        placeholder="Type or click a suggestion"
        class="w-full rounded-t-lg z-2 sticky top-0 left-0   shadow-none h-13 [&_svg]:size-4 **:!text-nc !bg-accent border-neutral/30 border-4" set-focus @update:query="e => e" />

      <div class="grid grid-cols-[100px_1fr] overflow-hidden ">
        <div class="size-full border-r border-r-accent overflow-y-auto max-h-115">
          <ItemSorting />

          <Separator class="bg-accent mt-3 mb-3 " />
          <LazyItemCommandTags />
        </div>
        <div class=" relative overflow-hidden size-full h-117">
          <TransitionExpand>
            <div as="div" class="absolute top-0 left-0 inset-0 overflow-y-scroll">
              <div>
                <LazyItemCommandTypes />

                <Separator class="bg-accent mt-3 mb-1.5 " />
                <LazyItemCommandStats />
              </div>
            </div>
          </TransitionExpand>
        </div>
      </div>
    </CustomPopoverContent>
  </Popover>
</template>