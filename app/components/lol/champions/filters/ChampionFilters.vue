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
    class="
      absolute inset-x-0 top-16 z-1 flex h-32 flex-col gap-5 overflow-hidden
      bg-b1 px-8 pt-11
    ">
    <div class="flex items-center gap-10">
      <div class="relative flex grow items-center gap-6">
        <ExpandSearch
          class="
            absolute left-0 max-w-60 btn-neutral
            **:[&_svg]:opacity-96!
          "
          @update:reset="filters.query = null">
          <input
            v-model="filters.query"
            type="text"
            class="size-full" />
        </ExpandSearch>

        <h1 class="mr-1 text-9! tracking-tight">
          Champions
        </h1>

        <ChampionQuote
          as="p"
          class="
            flex items-center px-2 pt-1 font-serif text-3 tracking-wide
            text-nowrap dst
          " />
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

    <div class="flex w-full items-center gap-12"></div>
    <!-- <ChampionGridTypeToggle /> -->
  </menu>
</template>
