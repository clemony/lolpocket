<script lang="ts" setup>
const is = useItemStore()
const sortItemsAZ = ref(0)
const sortPrice = ref(0)

function resetItems() {
  sortItemsAZ.value = 0
  sortPrice.value = 0
  is.filterItemStats = []
  is.filterItemCats = []
  is.filterItemTypes = ''
  is.itemSearchResult = []
  is.listKey = is.listKey + 1
}

const filter = ref(true)
const toggleFilter = useToggle(filter)
</script>

<template>
  <div class="flex flex-col items-center pb-6 size-full relative">
      <SidebarTitle  />
    <ItemSearch class="input mt-6 shadow-sm drop-shadow-sm !bg-neutral/85 inset-shadow-sm border-accent text-nc **:text-nc">
    </ItemSearch>

    <div class="px-7">
      <div class="divider divider-start before:bg-b3/60 font-semibold  my-8">
        Categories
      </div>
      <RadioFilterList
        :types="itemTypes"
        class=""
        @update:model="(e) => (is.filterItemTypes = e)" />
    </div>

    <div class="px-5 py-12 w-full">
      <ItemStatsChecklist />
    </div>
    <div class="mt-4 mb-6 px-8 flex gap-5 font-medium items-center w-full justify-end">
      Hide Unpurchasable
      <Switch v-model:model-value="is.itemDBHideNoBuy" class="dst" @update:model-value="e => is.itemDBHideNoBuy = e" />
    </div>
    <div class="px-7">
      <div class="divider divider-start before:bg-b3/60 font-semibold  mb-8">
        Roles
      </div>
      <CheckboxFilterList
        :source="itemCategories"
        @update:model="(e) => (is.filterItemCats = e)" />
    </div>

    <div class=" w-full  absolute bottom-0 left-0 px-3">
      <button
        class="btn btn-neutral font-normal"
        @click="resetItems">
        Reset Filters
      </button>
      <!-- TODO
         REDO with vueuse

         <ToggleStateButton
            v-model:model="sortItemsAZ"
            class="join-item rounded-r-none"
            icon1="qlementine-icons:sort-alpha-asc-16"
            icon2="qlementine-icons:sort-alpha-desc-16"
            @click.stop
            @update:model="(v) => (is.sortItemsAZ = v)" />
          <ToggleStateButton
            class="join-item rounded-l-none"
            :model="sortPrice"
            icon1="bi:sort-numeric-down"
            icon2="bi:sort-numeric-up"
            :icon-size="7"
            @click.stop
            @update:model="(v) => (is.sortPrice = v)" /> -->
    </div>
  </div>
</template>