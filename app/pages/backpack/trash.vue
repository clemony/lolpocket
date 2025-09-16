<script lang="ts" setup>
definePageMeta({
  name: 'trash',
  path: '/backpack/trash',
  parent: '/backpack',
  order: 3,
  level: 2,
  icon: 'trash',
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
