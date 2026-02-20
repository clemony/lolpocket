<script lang="ts" setup>
const route = useRoute()
/* function handleHide(e) {
  const columns = champFilter().championGridApi.getColumnDefs()
  const updatedCols = columns.map(col => {
    if (col.headerName === 'Base') {
      return {
        ...col,
        hide: e.value
      }
    }
    return col
  })
  champFilter().championGridApi.setGridOption('columnDefs', updatedCols)
} */
const { filtered, filters, setFilter } = is() as any
const query = ref<string | null>(null)
</script>

<template>
  <menu
    class="absolute inset-x-0 top-16 z-1 flex h-32 flex-col gap-5 overflow-hidden bg-p0 px-8 pt-11">
    <div class="flex items-center gap-10">
      <div class="relative flex grow items-center gap-6">
        <ExpandSearch
          class="absolute left-0 max-w-60 btn-neutral **:[&_svg]:opacity-96!"
          @update:reset="filters.query = null">
          <input v-model="filters.query" class="size-full" type="text" />
        </ExpandSearch>

        <h1 class="mr-1 text-5xl! tracking-tight">Champions</h1>

        <ChampionQuote
          class="dst flex items-center px-2 pt-1 font-serif text-md tracking-wide text-nowrap"
          as="p" />
      </div>

      <!--     <NumberField id="level" v-model:model-value="champFilter().championGridLevel" :min="1" :max="18">
      <Label class="text-sm">Champion Level</Label>

      <NumberPickerContent class="w-32">
        <NumberFieldDecrement />
        <NumberFieldInput class=" borderneutral" />
        <NumberFieldIncrement />
      </NumberPickerContent>
    </NumberField> -->
      <Grow />

      <ChampionRoleFilter />

      <MapPositionFilter />

      <slot />
    </div>

    <div class="flex w-full items-center gap-12" />
    <!-- <ChampionGridTypeToggle /> -->
  </menu>
</template>
