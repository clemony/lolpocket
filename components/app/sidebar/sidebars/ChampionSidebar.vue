<script lang="ts" setup>
const cs = useChampStore()
const route = useRoute()
const model = ref('Grid')

onMounted (() => {
  route.path == '/champions/list' ? model.value = 'List' : 'Grid'
})

/* function handleHide(e) {
  const columns = cs.championGridApi.getColumnDefs()
  const updatedCols = columns.map(col => {
    if (col.headerName === 'Base') {
      return {
        ...col,
        hide: e.value
      }
    }
    return col
  })
  cs.championGridApi.setGridOption('columnDefs', updatedCols)
} */
</script>

<template>
  <div class="flex pl-4 pr-2 w-116 h-full flex-col items-center pb-6 justify-start  relative">
   <div class="w-full px-5 mt-4">
      <Tabs v-model:model-value="model" class=" w-full  **:pointer-events-auto ">
        <IndicatorTabsList class="grid grid-cols-2 h-10">
          <IndicatorTabsTrigger value="Grid" @click="navigateTo('/champions')">
            Grid
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="List" @click="navigateTo('/champions/list')">
            List
          </IndicatorTabsTrigger>
          <TabIndicator />
        </IndicatorTabsList>
      </Tabs>

    <ChampionSearch class="input mt-10 w-full shadow-sm drop-shadow-sm !bg-neutral/85 !h-12 inset-shadow-sm border-accent text-nc **:text-nc">
    </ChampionSearch>

  </div>
    <div class="divider divider-start before:bg-b3/60 font-semibold  my-8 mx-5">
      Roles
    </div>
    <div class="px-7">
      <CheckboxFilterList
        @update:model="(e) => (cs.filterChampionClass = e)" />
    </div>

    <div class="divider divider-start before:bg-b3/60 font-semibold mx-5  my-8">
      Positions
    </div>
    <div class="px-7 ">
      <ChampionPositionFilter />
    </div>

    <div class="divider divider-start before:bg-b3/60 font-semibold  my-8 mx-5">
      Champion Level
    </div>
    <div class="px-8.5 w-full flex justify-between items-center">
      <NumberField id="level" v-model:model-value="cs.championGridLevel" :min="1" :max="18">
        <NumberPickerContent class="w-32">
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberPickerContent>
      </NumberField>

      <div class="text-2 flex gap-6 font-medium items-center">
        <p>
          Collapse All<br />Expanded
        </p>
        <Switch class="drop-shadow-xs" :default-value="false" @update:model-value="''" />
      </div>
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