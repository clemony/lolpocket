<script lang="ts" setup>
const { championData, itemData } = defineProps<{
  championData: ChampionRecord
  itemData: ItemRecord
}>()

const route = useRoute()

const pocket = computedAsync (() => {
  const a = getPocket(route.params.pocketKey)
  console.log('💠 - pocket - a:', a)
  return a
})

const pocketNav = ref()

onMounted (() => {
  pocketNav.value = route.path
})
</script>

<template>
  <div class="h-full overflow-y-auto relative min-w-105  max-w-105">
    <div class=" mt-16 py-6 inset-0 absolute top-0 left-0 flex flex-col gap-6 pl-7 ">
      <PocketHeader :pocket="pocket" @update:model-value="e => pocket.name = e" />
      <PocketTabs
        :pocket="pocket" />
      <SidebarSelectedChampions :pocket="pocket" :champion-data="championData" />

      <PocketItemsSidebarMenu :pocket="pocket" :item-data="itemData" />
      <PocketSidebarRunes :pocket="pocket" />

      <PocketRoles :pocket="pocket" />

      <!--         <FieldTransition expand>
        <PocketSpellsCollapsible :pocket="pocket" />
          </FieldTransition> -->

      <!--       <PocketCardButton :pocket="pocket" @click="pocketNav = null" />
 -->
      <PocketSidebarMenu :pocket="pocket" />
    </div>
  </div>
</template>