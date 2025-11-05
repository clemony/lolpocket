<script lang="ts" setup>
const route = useRoute()
/* function handleHide(e) {
  const columns = cs().championGridApi.getColumnDefs()
  const updatedCols = columns.map(col => {
    if (col.headerName === 'Base') {
      return {
        ...col,
        hide: e.value
      }
    }
    return col
  })
  cs().championGridApi.setGridOption('columnDefs', updatedCols)
} */
const { filtered, filters, setFilter } = useItemFilter()
const query = ref<string>(null)
</script>

<template>
  <menu
    class="overflow-hidden inset-x-0 px-8 pt-11 flex flex-col gap-5 h-32 z-1 top-16 bg-b1 absolute">
    <div class="flex items-center gap-10">
      <div class="flex relative items-center grow gap-6">
        <ExpandSearch
          class="absolute **:[&_svg]:!opacity-96 left-0 btn-neutral max-w-60"
          @update:reset="filters.query = null">
          <input
            v-model="filters.query"
            type="text"
            class="size-full" />
        </ExpandSearch>

        <h1 class="!text-9 tracking-tight mr-1">
          Champions
        </h1>

        <ChampionQuote
          as="p"
          class="text-3 dst items-center pt-1 px-2 font-serif tracking-wide text-nowrap flex" />
      </div>

      <!--     <NumberField id="level" v-model:model-value="cs().championGridLevel" :min="1" :max="18">
      <Label class="text-2">Champion Level</Label>

      <NumberPickerContent class="w-32">
        <NumberFieldDecrement />
        <NumberFieldInput class=" borderneutral" />
        <NumberFieldIncrement />
      </NumberPickerContent>
    </NumberField> -->
      <Grow />

      <ChampionRoleFilter />

      <ChampionPositionFilter />

      <slot />
    </div>

    <div class="flex gap-12 items-center w-full"></div>
    <!-- <ChampionGridTypeToggle /> -->
  </menu>
</template>
