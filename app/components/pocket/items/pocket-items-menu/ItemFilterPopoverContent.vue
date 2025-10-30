<script setup lang="ts">
const scrollArea = useTemplateRef<HTMLElement>('scrollArea')

onMounted(() => scrollArea.value?.scrollTo({ top: 0 }))
</script>

<template>
  <PopoverContent
    update-position-strategy="always"
    variant="input"
    @open-auto-focus.prevent>
    <InputGroup class="h-12 rounded-b-none border-x-0 border-t-0 hover:ring-0">
      <InputGroupAddon>
        <icon
          name="search"
          class="size-4.5 opacity-50" />
      </InputGroupAddon>
      <InputGroupInput
        v-model="is().filters.query" />
      <InputGroupClear
        class="mr-6"
        @clear:input="is().filters.query = ''" />

      <InputGroupAddon align="inline-end">
        <icon
          name="filter"
          class="mr-2 size-4.5 opacity-50" />
      </InputGroupAddon>
    </InputGroup>
    <div class="relative grid h-108 w-full grid-cols-[1fr_calc(var(--spacing)*14)]">
      <div
        ref="scrollArea"
        class="overflow-auto ">
        <div class=" relative  grid w-full auto-rows-auto items-start gap-3 pt-5 pb-7 pl-5">
          <Button
            v-if="is().filters.stats.length"
            size="sq-xxs"
            hover="btn"
            variant="outline"
            class="absolute top-7 right-6"
            @click="is().filters.stats.length = 0">
            <icon
              name="x"
              class="size-4" />
          </Button>
          <ItemStatsList
            wrapper-class="flex-wrap pr-8 gap-x-6 max-h-106 flex flex-col gap-y-0"
            class="gap-3.5 *:w-max *:!gap-2.5 *:pr-6  *:pl-4 "
            icons
            :indicator="false"
            labels />
          <Separator class="-mx-6 w-[calc(100%+var(--spacing)*12)] -translate-x-6 -translate-y-3" />

          <div class="grid w-full grid-cols-[0.6fr_1fr] gap-x-12 gap-y-1 pr-8">
            <Label class="popover-button-label">
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
            <Label class="popover-button-label">
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
              class="max-h-56 flex-col flex-wrap  items-start"
              :size="['sq-xs', '8']"
              variant="ghost" />
            <!-- tags -->
            <ItemTagsFilter
              :clear="false"
              class="max-h-56 w-9/10 flex-col flex-wrap items-start gap-y-3"
              :size="['sq-xs', '8']" />
          </div>
        </div>
      </div>
      <div class="border-l-b3 sticky top-0 right-0 z-2 flex h-108 w-14 max-w-14 shrink-0 flex-col items-center justify-between gap-3 border-l pt-3 pb-2 pb-3  ">
        <ItemMapRadio />
        <!-- shop -->

        <Grow class="max-w-14" />
        <ShopToggle
          size="sq-9"
          class="!border-b4/60 border" />
        <Button
          variant="neutral"
          size="sq-9"
          @click="is().clearFilters()">
          <icon
            name="reset"
            class="size-4" />
        </Button>
      </div>
    </div>
  </PopoverContent>
</template>