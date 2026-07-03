<script lang="ts" setup>
import { newItemSet } from "~/domain/pocket/utils/manage/addPocketModules"

const route = useRoute()
const store = pocketStore()
const pocket = computed(() => store.getPocket(String(route.params.pocket_key)))

function addItemSet() {
  pocket.value?.items?.push(newItemSet())
}

function clearRankFilter() {
  is().filters.rank = ""
}
</script>

<template>
  <UDashboardToolbar>
    <UPopover>
      <UButton
        class="pr-4"
        color="neutral"
        size="lg"
        @click="addItemSet">
        <icon class="size-4.5" name="add" />
        Set
      </UButton>
      <template #content>
        <LazyItemFilterPopoverContent />
      </template>
    </UPopover>

    <UPopover>
      <UButton
        v-if="is().filters.rank"
        class="pr-2"
        color="neutral"
        hover="btn"
        size="sm"
        @click="clearRankFilter">
        {{ is().filters.rank }}
        <icon class="size-4 **:stroke-[2.1]" name="x" />
      </UButton>
      <template v-if="is().filters.tags.length" #content>
        <ItemTagButton
          v-for="(tag, i) in is().filters.tags"
          :key="tag"
          clear
          :active="true"
          :tag />
      </template>
    </UPopover>
    <template v-if="is().filters.stats.length">
      <ItemStatButton
        v-for="(stat, i) in is().filters.stats"
        :key="stat"
        clear
        active
        :stat
        @click="void is().filters.stats.splice(i, 1)" />
    </template>
  </UDashboardToolbar>
</template>
