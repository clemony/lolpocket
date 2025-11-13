<script lang="ts" setup>
const props = defineProps<{
  class?: HTMLAttributes["class"];
  sideOffset?: number;
  type?: string;
  hasData?: boolean;
}>();

const emit = defineEmits(["update:open"]);

const isOpen = ref(false);
const hasData = computed(() => props.hasData);
watchEffect(() => {
  emit("update:open", isOpen.value);
});
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger
      class="btn relative flex btn-square items-center btn-neutral"
    >
      <icon name="search-bold" class="-mt-px size-4.5 shrink-0 text-nc" />

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
        placeholder="Type or click a suggestion"
        class="sticky top-0 left-0 z-2 h-13 w-full rounded-t-lg border-4 border-neutral/30 bg-accent! shadow-none **:text-nc! [&_svg]:size-4"
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
          <div as="div" class="absolute inset-0 top-0 left-0 overflow-y-scroll">
            <div>
              <LazyItemCommandTypes />

              <Separator class="mt-3 mb-1.5 bg-accent" />

              <LazyItemCommandStats />
            </div>
          </div>
        </div>
      </div>
    </CustomPopoverContent>
  </Popover>
</template>
