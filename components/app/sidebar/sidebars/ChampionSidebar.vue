<script lang="ts" setup>
import { categories } from 'shared/data/champion/championCategories'

const cs = useChampStore()
const filter = ref(false)
const toggleFilter = useToggle(filter)




</script>

<template>
  <div class="flex flex-col items-center pb-6 size-full relative">
      <SidebarTitle  />
    <ChampionSearch class="input mt-6 shadow-sm drop-shadow-sm !bg-neutral/85 !h-12 inset-shadow-sm border-accent text-nc **:text-nc">
    </ChampionSearch>
    <div class="px-7">
      <div class="divider divider-start before:bg-b3/60 font-semibold  my-8">
        Roles
      </div>
      <ChampionPositionFilter />
    </div>

    <!--       <div class="px-5 py-12 w-full">
        <ItemStatsChecklist />
      </div>
      <div class="mt-4 mb-6 px-8 flex gap-5 font-medium items-center w-full justify-end">
        Hide Unpurchasable
        <Switch v-model:model-value="is.itemDBHideNoBuy" class="dst" @update:model-value="e => is.itemDBHideNoBuy = e" />
      </div> -->
    <div class="px-7 mt-8">
      <div class="divider divider-start before:bg-b3/60 font-semibold  mb-8">
        Positions
      </div>
      <CheckboxFilterList
        :source="categories"
        @update:model="(e) => (cs.filterChampionClass = e)" />
    </div>

    <div class=" w-full  absolute bottom-0 left-0 px-3">
      <!--    <button
          class="btn btn-neutral font-normal"
          @click="resetItems">
          Reset Filters
        </button> -->
    </div>
  </div>
</template>