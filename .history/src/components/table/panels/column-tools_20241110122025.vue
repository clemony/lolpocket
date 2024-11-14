<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore();

const toggleColumnVisibility = (colId, isVisible) => {
    ps.headerApi.value.setColumnsVisible([colId], isVisible);

    // Update visibility status in the columns array
    const columnToUpdate = ps.columns.find(col => col.colId === colId);
    if (columnToUpdate) {
        columnToUpdate.isVisible = isVisible;
    }
};

console.log(ps.columns)

</script>

<template>
<div v-for="column in columns" :key="column.colId" class="flex items-center">
    <input type="checkbox" :checked="column.isVisible"
        @change="toggleColumnVisibility(column.colId, $event.target.checked)" />
    <label>{{ column.headerName }}</label>
</div>
</template>

<style scoped></style>