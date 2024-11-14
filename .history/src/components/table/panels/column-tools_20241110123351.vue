<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore();

const toggleColumnVisibility = (colId: string, event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    const isVisible = inputElement.checked;

    ps.headerApi.value.setColumnsVisible([colId], isVisible);

    const columnToUpdate = ps.columns.find(col => col.colId === colId);
    if (columnToUpdate) {
        columnToUpdate.isVisible = isVisible;
    }
};

console.log(ps.columns)

</script>

<template>
<div v-for="column in ps.columns" :key="column.colId" class="flex items-center">
    <input type="checkbox" :checked="column.isVisible" @change="toggleColumnVisibility(column.colId, $event)" />
    <label>{{ column.headerName }}</label>
</div>
</template>

<style scoped></style>