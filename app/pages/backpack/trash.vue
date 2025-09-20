<script lang="ts" setup>
definePageMeta({
  name: 'trash',
  icon: 'trash',
  level: 2,
  order: 3,
  parent: '/backpack',
  path: '/backpack/trash',
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
  <button class="btn bg-domination text-white text-xs font-medium">
    <icon
      name="nimbus:fire"
      class="size-5 text-white" />

    <span class="pt-px">Delete All</span>
  </button>

  <div class="size-full relative"></div>
</template>
