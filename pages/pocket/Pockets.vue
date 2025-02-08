<script lang="ts" setup>
definePageMeta({
  name: 'pockets',
  path: '/pockets',
})

const isChecked = ref(false)
</script>

<template>
  <div class="size-full">
    <MenubarSpacer />
    <div class="h-[9.5vh] min-h-[9vh] pl-18 pr-8 w-full  flex items-center">
      <PocketBreadcrumbs />
      <Grow  />
      <TableBar v-model:model-value="isChecked" />
    </div>
    <div class=" grid grid-cols-[auto_0px] size-full transition-all duration-400 relative" :class="{ 'grid-cols-[auto_350px]': isChecked }">
      <PocketsTable />
    </div>
  </div>
</template>

<style scoped>

</style>