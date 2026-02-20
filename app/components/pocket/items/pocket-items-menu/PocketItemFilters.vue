<script lang="ts" setup>
import { newItemSet } from "~/domain/pocket/addPocketModules"

const route = useRoute()
const pocket = computed(() =>
  usePockets().getPocket(String(route.params.pocket_key))
)
</script>

<template>
  <!--   <div class="w-full justify-self-center mx-auto px-4  items-center sticky py-0 -top-50  z-1 bg-p0/86 backdrop-blur-sm  relative rounded-lg  gap-4 flex flex-col before:border-p0"></div> -->
  <div
    class="sticky -top-55 z-1 flex w-full flex-col items-center gap-4 pt-4 before:absolute before:top-0 before:-left-1 before:box-content before:size-full before:border-4 before:border-p0 before:bg-p0/96 before:backdrop-blur-sm">
    <div
      class="flex h-14 w-full flex-nowrap items-center justify-start gap-4 pr-1.5">
      <UButton
        class="pr-4"
        color="neutral"
        size="lg"
        @click="pocket?.items?.push(newItemSet())">
        <icon class="size-4.5" name="add" />
        Set
      </UButton>
      <UPopover>
        <LazyItemFilterPopoverContent />
      </UPopover>
    </div>

    <div
      v-auto-animate
      class="scrollbar-none flex w-full flex-wrap justify-start gap-4 overflow-x-auto">
      <UButton
        v-if="is().filters.rank"
        class="pr-2"
        color="neutral"
        hover="btn"
        size="sm"
        @click="is().filters.rank = ''">
        {{ is().filters.rank }}
        <icon class="size-4 **:stroke-[2.1]" name="x" />
      </UButton>
      <template v-if="is().filters.tags.length">
        <ItemTagButton
          v-for="(tag, i) in is().filters.tags"
          :key="tag"
          clear
          :active="true"
          :tag
          @click="is().filters.tags.splice(i, 1)" />
      </template>
      <template v-if="is().filters.stats.length">
        <ItemStatButton
          v-for="(stat, i) in is().filters.stats"
          :key="stat"
          clear
          active
          :stat
          @click="is().filters.stats.splice(i, 1)" />
      </template>
    </div>
  </div>
</template>
