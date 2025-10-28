<script setup lang="ts">
const scrollArea = useTemplateRef<HTMLElement>('scrollArea')

onMounted(() => scrollArea.value?.scrollTo({ top: 0 }))
</script>

<template>
  <PopoverContent
    update-position-strategy="always"
<<<<<<< HEAD
    variant="input"
    @open-auto-focus.prevent>
    <InputGroup class="h-12 rounded-b-none border-x-0 border-t-0 hover:ring-0">
=======
    class="w-[var(--reka-popover-trigger-width)] grid -translate-y-[calc(var(--reka-popover-trigger-height)+9px)] h-120 max-h-120 border-b3 p-0 overflow-hidden">
    <InputGroup
      ref="input"
      class="h-12 rounded-b-none border-x-0 border-t-0 hover:ring-0">
>>>>>>> refs/remotes/origin/main
      <InputGroupAddon>
        <icon
          name="search"
          class="size-4.5 opacity-50" />
      </InputGroupAddon>
      <InputGroupInput
        v-model="is().filters.query" />
<<<<<<< HEAD
      <InputGroupClear
        class="mr-6"
        @clear:input="is().filters.query = ''" />
=======
      <InputGroupClear @clear:input="is().filters.query = ''" />
>>>>>>> refs/remotes/origin/main

      <InputGroupAddon align="inline-end">
        <icon
          name="filter"
          class="size-4.5 opacity-50 mr-2" />
      </InputGroupAddon>
    </InputGroup>
    <div class="h-108 w-full relative grid-cols-[1fr_calc(var(--spacing)*14)] grid">
      <div
        ref="scrollArea"
        class="overflow-auto ">
<<<<<<< HEAD
        <div class=" pl-5 pb-7 pt-5 flex relative w-full items-start grid auto-rows-auto gap-3">
          <Button
            v-if="is().filters.stats.length"
            size="sq-xxs"
            hover="btn"
            variant="outline"
            class="absolute right-6 top-7"
            @click="is().filters.stats.length = 0">
            <icon
              name="x"
              class="size-4" />
          </Button>
          <ItemStatsList
            wrapper-class="flex-wrap pr-8 gap-x-6 max-h-106 flex flex-col gap-y-0"
            class="gap-3.5 *:w-max *:pl-4 *:pr-6  *:!gap-2.5 "
            icons
            :indicator="false"
            labels />
          <Separator class="-mx-6 -translate-y-3 w-[calc(100%+var(--spacing)*12)] -translate-x-6" />

          <div class="grid grid-cols-[0.6fr_1fr] w-full gap-y-1 gap-x-12 pr-8">
            <Label class="popover-button-label">
=======
        <div class=" pl-5 pb-7 pt-5 flex w-full items-start grid auto-rows-auto gap-3">
          <ItemStatsList
            wrapper-class="grid grid-cols-[0.74fr_repeat(2,1fr)] pr-8 gap-x-6"
            class="gap-3.5 *:w-max *:px-4   *:border-b3/60 "
            icons
            :indicator="false"
            labels />
          <Separator class="-mx-6 w-[calc(100%+var(--spacing)*12)] -translate-x-6" />

          <div class="grid grid-cols-[0.6fr_1fr] w-full gap-y-3 gap-x-12 pr-8">
            <Label class="!text-2 h-6 pr-1 my-2 cursor-pointer justify-between font-semibold text-bc/90 w-full">
>>>>>>> refs/remotes/origin/main
              Item Tier
              <Button
                v-if="is().filters.rank"
                size="sq-xxs"
                variant="outline"
                @click="is().filters.rank = null">
                <icon
                  name="x"
                  class="size-4" />
              </Button>
            </Label>
<<<<<<< HEAD
            <Label class="popover-button-label">
=======
            <Label class="!text-2 h-6 pr-5 w-9/10 cursor-pointer justify-between my-2 font-semibold text-bc/90 ">
>>>>>>> refs/remotes/origin/main
              Categories
              <Button
                v-if="is().filters.tags.length"
                size="sq-xxs"
                variant="outline"
                hover="neutral"
                @click="is().filters.tags.length = 0">
                <icon
                  name="x"
                  class="size-4" />
              </Button>
            </Label>
            <ItemRankFilter
              :clear="false"
              hover="btn"
              class="flex-col flex-wrap max-h-56  items-start"
              :size="['sq-xs', 'xs']"
<<<<<<< HEAD
              variant="ghost" />
=======
              variant="outline" />
>>>>>>> refs/remotes/origin/main
            <!-- tags -->
            <ItemTagsFilter
              :clear="false"
              class="flex-col flex-wrap gap-y-3 w-9/10 max-h-56 items-start"
              :size="['sq-xs', 'xs']" />
          </div>
        </div>
      </div>
      <div class="pb-2 shrink-0 max-w-14 flex flex-col justify-between gap-3 items-center pt-3 pb-3 z-2 border-l border-l-b3 sticky top-0 right-0 h-108 w-14  ">
        <ItemMapRadio />
        <!-- shop -->

        <Grow class="max-w-14" />
        <ShopToggle
          size="sq-sm"
          class="border !border-b4/60" />
        <Button
          variant="neutral"
          size="sq-sm"
          @click="is().clearFilters()">
          <icon
            name="reset"
            class="size-4" />
        </Button>
      </div>
    </div>
  </PopoverContent>
</template>