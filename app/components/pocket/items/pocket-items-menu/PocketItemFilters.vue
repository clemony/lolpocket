<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocket_key)))
</script>

<template>
<<<<<<< HEAD
  <!--   <div class="w-full justify-self-center mx-auto px-4  items-center sticky py-0 -top-50  z-1 bg-b1/86 backdrop-blur  relative rounded-lg  gap-4 flex flex-col before:border-b1"></div> -->
  <div class="w-full  items-center sticky pt-4  -top-55  z-1 before:bg-b1/96 before:backdrop-blur before:size-full before:absolute before:top-0 before:box-content before:border-4  before:-left-1 relative gap-4 flex flex-col before:border-b1">
=======
  <div class="w-full ring-3 ring-b1 items-center sticky pt-4 pb-3 -top-54  z-1 bg-b1/96 backdrop-blur gap-4 flex flex-col">
>>>>>>> refs/remotes/origin/main
    <div class="flex w-full justify-start items-center h-14 gap-4 pr-1.5 flex-nowrap">
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
<<<<<<< HEAD
      <InputGroupPopover>
        <LazyItemFilterPopoverContent />
      </InputGroupPopover>
=======
      <Popover>
        <PopoverTrigger class="w-full *:pointer-events-none cursor-text">
          <InputGroup class="h-12">
            <InputGroupAddon>
              <icon
                name="search"
                class="size-4.5 opacity-50" />
            </InputGroupAddon>
            <InputGroupInput />
            <InputGroupAddon align="inline-end">
              <icon
                name="filter"
                class="size-4.5 mr-2 opacity-50" />
            </InputGroupAddon>
          </InputGroup>
        </PopoverTrigger>
        <LazyItemFilterPopoverContent />
      </Popover>
>>>>>>> refs/remotes/origin/main
    </div>

    <TransitionSlideLeft
      class="flex w-full overflow-x-auto scrollbar-none justify-start gap-4 flex-wrap">
      <Button
        v-if="is().filters.rank"
        class="pr-2"
        variant="neutral"
        hover="btn"
        size="xs"
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
