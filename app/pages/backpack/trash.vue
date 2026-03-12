<script lang="ts" setup>
definePageMeta({
  title: "Trash",
  icon: "trash",
  prefix: "Backpack",
  order: 3,
  path: "/backpack/trash",
})

/*
    cellRenderer: RemoveFromTrash,

    headerName: 'Icon',
    cellRenderer: TableIcon,

    cellRenderer: TableLink,

        cellRenderer: TableRole,

    headerName: 'Champions',

        cellRenderer: TableItem,

    headerName: 'Runes',

    headerName: 'Created', */
</script>

<template>
  <button class="btn bg-dom text-sm font-medium text-white">
    <icon class="size-5 text-white" name="nimbus:fire" />

    <span class="pt-px">Delete All</span>
  </button>

  <div class="relative size-full" />
</template>
