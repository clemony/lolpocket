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

const query = ref(null)
</script>

<template>
  <menu class="overflow-hidden inset-x-0 px-8 pt-11 flex flex-col gap-5 h-32 z-1 top-16  bg-b1 absolute ">
    <div class="flex  items-center gap-10 ">
      <div class="flex relative items-center grow gap-2.5 pl-15">

      <ExpandSearch @update:reset="cs.championFilter.query = null" class="absolute **:[&_svg]:!opacity-96  left-0 btn-neutral max-w-60 ">
     <input type="text" class="size-full" v-model="cs.championFilter.query" />
      </ExpandSearch>
        <h1 class="!text-9 tracking-tight mr-6">
          Champions
        </h1>
        <p
          class="text-3 dst items-center pt-1 px-2 font-serif tracking-wide text-nowrap flex ">
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
      <Grow />
      <ChampionRoleFilter />
      <ChampionPositionFilter />
      <Tabs v-model:model-value="tabs" class="w-80 shrink-0  **:pointer-events-auto ">
        <IndicatorTabsList class="grid grid-cols-2 h-10 border !border-b3/70 bg-b2">
          <IndicatorTabsTrigger value="/library/champions" :class="{ '!text-nc': tabs == '/library/champions' }" @click="navigateTo('/library/champions')">
            Grid
          </IndicatorTabsTrigger>
          <IndicatorTabsTrigger value="/library/champion_list" :class="{ '!text-nc': tabs == '/library/champion_list' }" @click="navigateTo('/library/champion_list')">
            List
          </IndicatorTabsTrigger>
          <TabIndicator contrast />
        </IndicatorTabsList>
      </Tabs>
    </div>
    <div class="flex gap-12 items-center  w-full">

    </div>
    <!-- <ChampionGridTypeToggle /> -->
  </menu>
</template>