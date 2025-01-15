<script setup lang="ts">
  const ps = usePocketStore();

  const toggleColumnVisibility = (colId: string, event: Event) => {
    const inputElement = event.target as HTMLInputElement;
    const isVisible = inputElement.checked;

    ps.headerApi.setColumnsVisible([colId], isVisible);

    const columnToUpdate = ps.columns.find((col) => col.colId === colId);
    if (columnToUpdate) {
      columnToUpdate.isVisible = isVisible;
    }
  };

  console.log(ps.columns);
</script>

<template>
  <VDropdown
    theme="hover-inner"
    placement="right-start"
    :disabled="!ps.pockets.length">
    <Button
      variant="ghost"
      size="xs"
      class="items-center gap-4">
      <icon
        name="fluent-mdl2:double-column"
        class="size-4.5" />
      <span class="-ml-[2px] pr-4 capitalize">Column Display</span>
      <icon
        name="teenyicons:right-small-outline"
        class="-mr-1 ml-2 size-3.5 justify-self-end" />
    </Button>
    <template #popper>
      <template
        v-for="column in ps.columns"
        :key="column.colId">
        <VDropdown
          v-if="column.headerName == 'Updated' || column.headerName == 'Created'"
          theme="hover-inner">
          <Label class="text-2 hover:bg-b2/60 flex w-full items-center gap-4 rounded-md px-3 py-1">
            <input
              type="checkbox"
              :checked="column.isVisible"
              @change="toggleColumnVisibility(column.colId, $event)"
              class="checkbox checkbox-xs" />
            <span class="pr-4">{{ column.headerName }}</span>
          </Label>
        </VDropdown>

        <VDropdown
          v-else-if="column.headerName != ''"
          theme="hidden">
          <Label class="text-2 hover:bg-b2/60 flex w-full items-center gap-4 rounded-md px-3 py-1">
            <input
              type="checkbox"
              :checked="column.isVisible"
              @change="toggleColumnVisibility(column.colId, $event)"
              class="checkbox checkbox-xs" />
            <span class="pr-4">{{ column.headerName }}</span>
          </Label>
        </VDropdown>
      </template>
    </template>
  </VDropdown>

  <VDropdown
    theme="hover-inner"
    placement="right-start"
    :disabled="!ps.pockets.length">
    <Button
      variant="ghost"
      size="xs"
      class="items-center gap-4">
      <icon
        name="fluent:mail-inbox-all-20-regular"
        class="-ml-1 size-6!" />
      <span class="text-2 -ml-[3px] pr-4 capitalize">Pocket Drawers</span>
      <icon
        name="teenyicons:right-small-outline"
        class="-mr-1 ml-2 size-3.5 justify-self-end" />
    </Button>
    <template #popper></template>
  </VDropdown>
</template>

<style scoped></style>
