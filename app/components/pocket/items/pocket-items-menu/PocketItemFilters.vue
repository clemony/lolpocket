<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocket_key)))
</script>

<template>
  <div class="w-full ring-3 ring-b1 items-center sticky pt-4 pb-3 -top-54  z-1 bg-b1/96 backdrop-blur gap-4 flex flex-col">
    <div class="flex w-full justify-start items-center h-14 gap-4 flex-nowrap">
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
      <Popover>
        <PopoverTrigger class="w-full">
          <InputGroup class="h-12">
            <InputGroupAddon>
              <icon
                name="search"
                class="size-4.5 opacity-50" />
            </InputGroupAddon>
            <InputGroupInput />
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent
          update-position-strategy="always"
          class="w-[var(--reka-popover-trigger-width)] -translate-y-[calc(var(--reka-popover-trigger-height)+9px)] max-h-100 border-b3 p-0 overflow-hidden">
          <InputGroup class="h-12 rounded-b-none border-x-0 border-t-0 hover:ring-0">
            <InputGroupAddon>
              <icon
                name="search"
                class="size-4.5 opacity-50" />
            </InputGroupAddon>
            <InputGroupInput
              v-model="is().filters.query"
              :autofocus="true" />
            <InputGroupClear @clear:input="is().filters.query = ''" />
          </InputGroup>

          <div class=" px-5 pb-5 pt-7 flex w-full flex-col gap-6">
            <ItemRankFilter
              hover="secondary"
              :size="['sq-xs', 'xs']"
              variant="btn" />
          </div>
          <Separator />

          <div class=" px-5 pb-5 pt-5 flex w-full flex-col gap-6">
            <!-- tags -->
            <ItemTagsFilter
              variant="btn"
              hover="secondary"
              class="not-first-line:indent-25"
              :size="['sq-xs', 'xs']" />
          </div>
          <Separator />
          <div class="flex px-6 py-5 items-center justify-between">
            <!-- map -->
            <div class="flex items-center ">
              <span class="justify-self-start text-bc/90  w-25  font-semibold">Map</span>
              <ItemMapRadio />
            </div>
            <!-- shop -->
            <ShopSwitch class="*:first:w-25 " />
          </div>
        </PopoverContent>
      </Popover>

      <ItemSelectStats />
    </div>

    <TransitionSlideLeft
      class="flex w-full overflow-x-auto scrollbar-none justify-start gap-4 flex-wrap">
      <Button
        v-if="is().filters.rank"
        class="pr-2"
        variant="btn"
        hover="neutral"
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
          active
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
