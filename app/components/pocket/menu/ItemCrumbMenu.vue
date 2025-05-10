<script lang="ts" setup>
const props = defineProps<{
  pocket: Pocket
}>()

const is = useItemStore()

const pocket = computed (() => {
  return props.pocket
})

const hasData = computed (() => {
  return (is.pItemFilter.stats.length
    || is.pItemFilter.rank != null
    || is.pItemFilter.tags.length
    || is.AZmodel != 0
    || is.priceModel != 0) == true
})

function clearFilters() {
  is.pItemFilter.stats.length = 0
  is.pItemFilter.rank = null
  is.pItemFilter.tags = null
  is.AZmodel = 0
  is.priceModel = 0
}
</script>

<template>
  <TransitionSlide
    as="div" group
    class="flex gap-2">
    <button
      v-tippy="'Add Set'"
      class="btn  btn ghost btn-square"
      @click="newItemSet(pocket.key)">
      <icon
        name="add-sm"
        class="size-7  dst" />
    </button>

    <button
      v-tippy="hasData ? 'Clear Filters' : 'No Active Filters'"
      :disabled="!hasData"
      class="btn  btn ghost btn-square disabled:opacity-40 disabled:inset-shadow-sm group/fi"
      @click="clearFilters()">
      <icon name="mdi:sort-variant-remove" class="dst size-6 -mt-px group-disabled/fi:opacity-60" />
    </button>
    <div>
      <PocketItemCommand :pocket="pocket" :has-data="hasData" />
    </div>
  </TransitionSlide>
</template>