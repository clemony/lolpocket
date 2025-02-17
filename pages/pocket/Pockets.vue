<script lang="ts" setup>
import type { GridApi } from 'ag-grid-community'

definePageMeta({
  name: 'pockets',
  path: '/pockets',
})
</script>

<template>
  <div class="size-full bg-gradient-to-b from-b1 to-b2/40">
    <MenubarSpacer />
    <div class="h-[9.5vh] min-h-[9vh] pl-18 pr-8 w-full  flex items-center">
      <PocketBreadcrumbs />
      <TableBar />
      <Grow />

      <NeutralButton
        class=" ring-neutral ring btn-md mr-2 gap-3 pr-8 pl-4"
        @click="ts.pocketSheetTrigger = true"
      >
        <icon name="add-sm" class="shrink-0 size-6" />
        New Pocket
      </NeutralButton>
    </div>
    <div class=" grid grid-cols-[auto_0px] size-full transition-all duration-400 relative">
      <PocketsTable />
    </div>
  </div>
</template>

<style scoped>

</style>