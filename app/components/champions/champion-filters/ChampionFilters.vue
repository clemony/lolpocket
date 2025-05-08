<script lang="ts" setup>
const cs = useChampStore()
const route = useRoute()
const tabs = ref('Grid')

onMounted (() => {
  tabs.value = route.path
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

const quote = ref(null)
onMounted (() => {
  quote.value = getQuote()
})
</script>

<template>
  <menu class="overflow-hidden inset-x-0 px-8 pt-6 flex flex-col gap-5 h-42 z-1 top-16  bg-b1 absolute ">
    <div class="flex  items-center gap-4 ">
      <div class="flex items-center grow gap-2.5">

        <h1 class="!text-9 tracking-tight mr-6">
          Champions
        </h1>
        <p
          class="text-4 dst items-center px-2 font-serif tracking-wide text-nowrap flex ">
          {{ quote }}
        </p>
      </div>

      <!--     <NumberField id="level" v-model:model-value="cs.championGridLevel" :min="1" :max="18">
      <Label class="text-2">Champion Level</Label>

      <NumberPickerContent class="w-32">
        <NumberFieldDecrement />
        <NumberFieldInput class=" border-neutral" />
        <NumberFieldIncrement />
      </NumberPickerContent>
    </NumberField> -->

   

      <Tabs v-model:model-value="tabs" class="w-90 shrink-0  **:pointer-events-auto ">
        <IndicatorTabsList class="grid grid-cols-2 h-10">
          <IndicatorTabsTrigger value="/library/champions" @click="navigateTo('/library/champions')">
            Grid
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="/library/champion_list" @click="navigateTo('/library/champion_list')">
            List
          </IndicatorTabsTrigger>
          <TabIndicator />
        </IndicatorTabsList>
      </Tabs>
    </div>
    <div class="flex gap-8 items-center  w-full">
      <ChampionPositionFilter />
      <ChampionRoleFilter />
      <Grow  />
  <ChampionSearch class="input rounded-lg-2 border-b4/80  !-mt-2 !w-89  !h-11 ">
    </ChampionSearch>
    <!--    <button
          class="btn btn-neutral font-normal"
          @click="resetItems">
          Reset Filters
        </button> -->
    </div><!--
      <ChampionGridTypeToggle /> -->
  </menu>
</template>