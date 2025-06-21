<script setup lang="ts">
const props = defineProps<{
  params: {
    api
    node
  }
}>()
const ps = usePocketStore()
const api = props.params.api

function select(e) {
  e.target.checked ? api.selectAllFiltered() : api.deselectAll()
}
</script>

<template>
  <div class="grid size-full place-items-center">
    <input
      v-model="ps.tableSelectAll"
      type="checkbox"
      class="checkbox checkbox-xs"
      :indeterminate="ps.selectedRows.length > 0 && ps.selectedRows.length < ps.pockets.length"
      :checked="ps.selectedRows.length == ps.pockets.length"
      @change="select($event)" />
  </div>
</template>

<style scoped></style>
