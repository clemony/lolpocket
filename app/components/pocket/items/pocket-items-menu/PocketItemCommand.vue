<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes['class']
  sideOffset?: number
  type?: string
  hasData?: boolean
}>()

const emit = defineEmits(['update:open'])

const isOpen = ref(false)
const hasData = computed(() => props.hasData)
watchEffect(() => {
  emit('update:open', isOpen.value)
})
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger
      class="btn btn-square btn-neutral relative flex items-center"
    >
      <icon class="text-nc -mt-px size-4.5 shrink-0" name="search-bold" />

      <StatusIndicator v-if="hasData" class="-top-0.5 -right-0.25" />
    </PopoverTrigger>

    <CustomPopoverContent
      class=""
      :class="cn('h-130 w-140 rounded-lg p-0', props.class)"
      align="end"
      :side-offset="2"
      side="bottom"
      @open-auto-focus.prevent
    >
      <ItemSearch
        class="border-neutral/30 bg-accent! **:text-nc! sticky top-0 left-0 z-2 h-13 w-full rounded-t-lg border-4 shadow-none [&_svg]:size-4"
        placeholder="Type or click a suggestion"
        set-focus
        @update:query="(e) => e"
      />

      <div class="grid overflow-hidden">
        <!--   <div class="size-full border-r border-r-accent overflow-y-auto max-h-115">
          <ItemSorting />

          <Separator class="bg-accent mt-3 mb-3 " />
          <LazyItemCommandTags />
        </div> -->
        <div class="relative size-full h-117 overflow-hidden">
          <div class="absolute inset-0 top-0 left-0 overflow-y-scroll" as="div">
            <div>
              <LazyItemCommandTypes />

              <Separator class="bg-accent mt-3 mb-1.5" />

              <LazyItemCommandStats />
            </div>
          </div>
        </div>
      </div>
    </CustomPopoverContent>
  </Popover>
</template>
