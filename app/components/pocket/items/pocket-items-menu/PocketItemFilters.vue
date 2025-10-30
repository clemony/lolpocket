<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocket_key)))
</script>

<template>
  <!--   <div class="w-full justify-self-center mx-auto px-4  items-center sticky py-0 -top-50  z-1 bg-b1/86 backdrop-blur  relative rounded-lg  gap-4 flex flex-col before:border-b1"></div> -->
  <div class="before:bg-b1/96  before:border-b1 relative sticky  -top-55  z-1 flex w-full flex-col items-center gap-4 pt-4 before:absolute  before:top-0 before:-left-1 before:box-content before:size-full before:border-4 before:backdrop-blur">
    <div class="flex h-14 w-full flex-nowrap items-center justify-start gap-4 pr-1.5">
      <Button
        variant="neutral"
        size="lg"
        class="pr-4"
        @click="pocket.items.push(newItemSet())">
        <icon
          name="add"
          class="size-4.5" />
        Set
      </Button>
      <InputGroupPopover>
        <LazyItemFilterPopoverContent />
      </InputGroupPopover>
    </div>

    <TransitionSlideLeft
      class="scrollbar-none flex w-full flex-wrap justify-start gap-4 overflow-x-auto">
      <Button
        v-if="is().filters.rank"
        class="pr-2"
        variant="neutral"
        hover="btn"
        size="8"
        @click="is().filters.rank = null">
        {{ is().filters.rank }}
        <icon
          name="x"
          class="size-4 **:stroke-[2.1] " />
      </Button>
      <template v-if="is().filters.tags.length">
        <ItemTagButton
          v-for="tag, i in is().filters.tags"
          :key="tag"
          clear
          :active="true"
          :tag
          @click="is().filters.tags.splice(i, 1)" />
      </template>
      <template v-if="is().filters.stats.length">
        <ItemStatButton
          v-for="stat, i in is().filters.stats"
          :key="stat"
          clear
          active
          :stat
          @click="is().filters.stats.splice(i, 1)" />
      </template>
    </TransitionSlideLeft>
  </div>
</template>
