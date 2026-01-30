<script lang="ts" setup>
definePageMeta({
  title: 'trash',
  icon: 'trash',
  listClass: '**:stroke-[1.8] size-5.25',
  order: 3,
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
  <button class="btn bg-domination text-sm font-medium text-white">
    <icon class="size-5 text-white" name="nimbus:fire" />

    <span class="pt-px">Delete All</span>
  </button>

  <div class="relative size-full" />
</template>
