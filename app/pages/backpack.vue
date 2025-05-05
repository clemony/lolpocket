<script lang="ts" setup>
const ps = usePocketStore()

definePageMeta({
  section: 'backpack',
})
</script>

<template>
  <div class="w-full flex">
    <BackpackPocketList />
    <div class="w-full pb-2 pt-22 pr-18 grid grid-cols-[repeat(auto-fill,25rem)] grid-flow-row pl-10 gap-x-8 gap-y-10 justify-between  items-center overflow-x-hidden auto-rows-fr">
      <BackpackCard v-for="pocket in ps.pockets" :key="pocket.key" :pocket="pocket" />
    </div>
  </div>
</template>
