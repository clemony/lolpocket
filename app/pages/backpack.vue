<script lang="ts" setup>
const ps = usePocketStore()

definePageMeta({
  name: 'backpack',
  section: 'backpack',
  icon: 'backpack',
})
</script>

<template>
  <div class="size-full flex">
    <BackpackPocketList />

    <div
      class="w-full h-fit pb-2 pt-22  pr-18 grid-flow-row grid place-items-stretch place-content-stretch pl-10 gap-x-8 gap-y-10  items-center overflow-y-auto"
      :style="{ gridTemplateColumns: 'repeat(auto-fit, minmax(22rem, 30rem))' }">
      <BackpackCard v-for="pocket in ps.pockets" :key="pocket.key" :pocket="pocket" />
    </div>
  </div>
</template>

<!-- grid grid-flow-col auto-cols-[repeat,minmax(160px,320px)]  auto-rows-auto -->
