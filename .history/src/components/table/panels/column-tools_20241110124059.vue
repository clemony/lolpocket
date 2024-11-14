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
<div class='flex flex-col gap-1.5 p-1'>

    <Label v-for="column in ps.columns" :key="column.colId"
        class="flex gap-3 text-sm items-center rounded-md hover:bg-base-200/60 w-full py-1 px-2">
        <input type="checkbox" :checked="column.isVisible" @change="toggleColumnVisibility(column.colId, $event)"
            class='checkbox checkbox-xs' />
        {{ column.headerName }}
    </Label>

</div>
</template>

<style scoped></style>