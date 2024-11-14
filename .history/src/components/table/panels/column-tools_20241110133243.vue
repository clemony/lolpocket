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
    <VDropdown theme="hoverdd-inner" placement="right-start" :disabled="!ps.pockets.length">
        <Button variant="ghost" size="xs" class='gap-4 items-center'>
            <icon icon="fluent-mdl2:double-column" class='size-4.5' />
            <span class='-ml-[2px] capitalize pr-4'>Column Display</span>
            <icon icon="teenyicons:right-small-outline" class='ml-2 -mr-1 justify-self-end size-3.5' />
        </Button>
        <template #popper>

            <template v-for="column in ps.columns" :key="column.colId">

                <VDropdown v-if="column.headerName != ''" theme="hidden">
                    <Label class="flex gap-4 text-sm items-center rounded-md hover:bg-base-200/60 w-full py-1 px-3">
                        <input type="checkbox" :checked="column.isVisible"
                            @change="toggleColumnVisibility(column.colId, $event)" class='checkbox checkbox-xs' />
                        <span class='pr-4'>{{ column.headerName }}</span>


                    </Label>
                </VDropdown>
            </template>
        </template>

    </VDropdown>

    <VDropdown theme="hoverdd-inner" placement="right-start" :disabled="!ps.pockets.length">
        <Button variant="ghost" size="xs" class='gap-4 items-center'>
            <icon icon="fluent:mail-inbox-all-20-regular" class='!size-6 -ml-1' />
            <span class='-ml-[2px] capitalize pr-4'>
                Pocket Drawers
            </span>
            <icon icon="teenyicons:right-small-outline" class='ml-2 -mr-1 justify-self-end size-3.5' />
        </Button>
        <template #popper>
        </template>

    </VDropdown>
</div>
</template>

<style scoped></style>