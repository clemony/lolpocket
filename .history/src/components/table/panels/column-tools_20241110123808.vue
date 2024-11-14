<script setup lang="ts">
import { usePocketStore } from '@stores/pocketStore'
const ps = usePocketStore();

const toggleColumnVisibility = (colId: string, event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    const isVisible = inputElement.checked;

    ps.headerApi.setColumnsVisible([colId], isVisible);

    const columnToUpdate = ps.columns.find(col => col.colId === colId);
    if (columnToUpdate) {
        columnToUpdate.isVisible = isVisible;
    }
};

console.log(ps.columns)

</script>

<template>
<div class='flex flex-col gap-1 py-2 px-3'>

    <Label v-for="column in ps.columns" :key="column.colId" class="flex gap-3 items-center">
        <input type="checkbox" :checked="column.isVisible" @change="toggleColumnVisibility(column.colId, $event)"
            class='checkbox checkbox-sm' />
        {{ column.headerName }}
    </Label>

</div>
</template>

<style scoped></style>