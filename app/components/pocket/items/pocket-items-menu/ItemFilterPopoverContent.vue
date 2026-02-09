<script setup lang="ts">
const UScrollArea = useTemplateRef<HTMLElement>("UScrollArea")

onMounted(() => UScrollArea.value?.scrollTo({ top: 0 }))
</script>

<template>
  <div>
    <UInput
      icon="i-search"
      v-model:model-value="is().filters.query"
      class="peer"
      placeholder="search">
      <template #trailing>
        <UButton size="xs" square icon="filter" />
        <InputClear @clear-input="is().filters.query = ''" />
      </template>
    </UInput>
    <div
      class="relative grid h-108 w-full grid-cols-[1fr_calc(var(--spacing)*14)]">
      <div ref="UScrollArea" class="overflow-auto">
        <div
          class="relative grid w-full auto-rows-auto items-start gap-3 pt-5 pb-7 pl-5">
         <UButton
            v-if="is().filters.stats.length"
            class="absolute top-7 right-6 size-6"
            variant="outline"
            square
            @click="is().filters.stats.length = 0">
            <icon class="size-4" name="x" />
          </UButton>
          <ItemStatsList
            class="gap-3.5 *:w-max *:gap-2.5! *:pr-6 *:pl-4"
            wrapper-class="flex-wrap pr-8 gap-x-6 max-h-106 flex flex-col gap-y-0"
            icons
            :indicator="false"
            labels />
          <Separator
            class="-mx-6 w-[calc(100%+var(--spacing)*12)] -translate-x-6 -translate-y-3" />

          <div class="grid w-full grid-cols-[0.6fr_1fr] gap-x-12 gap-y-1 pr-8">
            <Label class="popover-button-label">
              Item Tier
             <UButton
                v-if="is().filters.rank"
                class="size-6"
                variant="outline"
                square
                @click="is().filters.rank = null">
                <icon class="size-4" name="x" />
              </UButton>
            </Label>
            <Label class="popover-button-label">
              Categories
             <UButton
                v-if="is().filters.tags.length"
                class="size-6"
                variant="outline"
                square
                @click="is().filters.tags.length = 0">
                <icon class="size-4" name="x" />
              </UButton>
            </Label>
            <ItemRankFilter
              class="max-h-56 flex-col flex-wrap items-start"
              :clear="false"
              hover="btn"
              variant="ghost" />
            <!-- tags -->
            <ItemTagsFilter
              class="max-h-56 w-9/10 flex-col flex-wrap items-start gap-y-3"
              :clear="false" />
          </div>
        </div>
      </div>
      <div
        class="sticky top-0 right-0 z-2 flex h-108 w-14 max-w-14 shrink-0 flex-col items-center justify-between gap-3 border-l border-l-p3 pt-3 pb-2 pb-3">
        <ItemMapRadio />
        <!-- shop -->

        <Grow class="max-w-14" />
        <ShopToggle class="border-b4/60! border" size="sq-9" />
        <UButton color="neutral" square size="sm" @click="is().clearFilters()">
          <icon class="size-4" name="reset" />
        </UButton>
      </div>
    </div>
  </div>
</template>
