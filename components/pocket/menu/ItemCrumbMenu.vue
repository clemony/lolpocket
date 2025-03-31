<script lang="ts" setup>
const is = useItemStore()

const props = defineProps<{
pocket: pocket
}>()

const pocket = computed (() => {
return props.pocket
})


const hasData = computed (() => {
return (is.filterItemStats.length ||
is.filterItemTypes != null ||
is.filterItemCats.length ||
is.AZmodel != 0 ||
is.priceModel != 0) == true? true : false
})

function clearFilters(){
  is.filterItemStats.length = 0
  is.filterItemTypes = null
is.filterItemCats.length = 0
is.AZmodel = 0
is.priceModel = 0
}
</script>

<template>

          <TransitionSlide as="div" group
     class="flex gap-2">
      <button
        v-tippy="'Add Set'"
        class="btn  btn ghost btn-square"
        @click="newItemSet(pocket.key)">
        <icon
          name="add-sm"
          class="size-7  dst" />
      </button>


      <button :disabled="!hasData"
        v-tippy="hasData ? 'Clear Filters' : 'No Active Filters'"
        class="btn  btn ghost btn-square disabled:opacity-40 disabled:inset-shadow-sm group/fi"
        @click="clearFilters()">

<icon name="mdi:sort-variant-remove" class="dst size-6 -mt-px group-disabled/fi:opacity-60" />
      </button>
<div>
          <PocketItemCommand  :pocket="pocket" :has-data="hasData" />
          </div>
</TransitionSlide>
</template>