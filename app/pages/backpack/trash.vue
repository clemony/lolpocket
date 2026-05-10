<script lang="ts" setup>
definePageMeta({
  title: "Trash",
  icon: "i-trash",
  iconKey: "trash",
  prefix: "Backpack",
  order: 4,
  path: "/backpack/trash"
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
