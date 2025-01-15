<script setup lang="ts">
  import { ContextMenuTrigger } from 'radix-vue';

  const ps = usePocketStore();
  const props = defineProps<{
    params: {
      api;
      node;
    };
  }>();

  const api = props.params.api;

  function select(e) {
    e.target.checked ? api.selectAllFiltered() : api.deselectAll();
  }
</script>

<template>
  <div class="grid size-full place-items-center">
    <input
      type="checkbox"
      class="checkbox checkbox-xs"
      v-model="ps.tableSelectAll"
      @change="select($event)"
      :indeterminate="ps.selectedRows.length > 0 && ps.selectedRows.length < ps.pockets.length"
      :checked="ps.selectedRows.length == ps.pockets.length" />
  </div>
</template>

<style scoped></style>
