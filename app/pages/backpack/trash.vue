<script lang="ts" setup>
definePageMeta({

  meta: {
    title: 'Trash',
    section: 'backpack',
    icon: 'trash',
  },
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
  <button class="btn  bg-domination  text-white text-2 font-medium">
    <icon
      name="nimbus:fire"
      class="size-5 text-white" />

    <span class="pt-px">Delete All</span>
  </button>

  <div class="size-full relative">
  </div>
</template>
