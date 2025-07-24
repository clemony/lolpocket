<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  sideOffset?: number
  type?: string
  hasData?: boolean
}>()

const emit = defineEmits(['update:open'])

const isOpen = ref(false)
const hasData = computed (() => props.hasData)
watchEffect(() => {
  emit('update:open', isOpen.value)
})
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger class="btn btn-neutral flex items-center btn-square relative">
      <icon
        name="search-bold"
        class="text-nc shrink-0 size-4.5 -mt-px" />

      <StatusIndicator
        v-if="hasData"
        class="-top-0.5 -right-0.25" />
    </PopoverTrigger>

    <CustomPopoverContent
      class=""
      :class="cn('w-140 rounded-lg h-130  p-0', props.class)"
      align="end"
      :side-offset="2"
      side="bottom"
      @open-auto-focus.prevent>
      <ItemSearch
        placeholder="Type or click a suggestion"
        class="w-full rounded-t-lg z-2 sticky top-0 left-0   shadow-none h-13 [&_svg]:size-4 **:!text-nc !bg-accent border-neutral/30 border-4"
        set-focus
        @update:query="e => e" />

      <div class="grid overflow-hidden ">
        <!--   <div class="size-full border-r border-r-accent overflow-y-auto max-h-115">
          <ItemSorting />

          <Separator class="bg-accent mt-3 mb-3 " />
          <LazyItemCommandTags />
        </div> -->
        <div class=" relative overflow-hidden size-full h-117">
          <div
            as="div"
            class="absolute top-0 left-0 inset-0 overflow-y-scroll">
            <div>
              <LazyItemCommandTypes />

              <Separator class="bg-accent mt-3 mb-1.5 " />

              <LazyItemCommandStats />
            </div>
          </div>
        </div>
      </div>
    </CustomPopoverContent>
  </Popover>
</template>