<script lang="ts" setup>
const ps = usePocketStore()

definePageMeta({
  name: 'backpack',
  section: 'backpack',
  icon: 'backpack',
})


</script>

<template>
  <div class="w-full flex">
    <BackpackPocketList />

    <div class="w-full pb-2 pt-22  pr-18 grid grid-flow-col auto-cols-[minmax(160px,320px)]  pl-10 gap-x-8 gap-y-10   items-center overflow-x-hidden overflow-hidden">
      <BackpackCard v-for="pocket in ps.pockets" :key="pocket.key" :pocket="pocket" />
    </div>
  </div>
</template>
