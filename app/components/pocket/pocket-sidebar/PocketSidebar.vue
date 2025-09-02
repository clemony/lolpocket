<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocketKey)))
const pocketNav = ref()

onMounted (() => {
  pocketNav.value = route.path
})

// pocket.value.main = { champion: '', items: '', runes: '', role: 'All', spells: [] }
</script>

<template>
  <aside class="h-full gap-8 sticky top-0 py-16 px-1 flex flex-col  overflow-y-auto    relative min-w-105  max-w-105">
    <div class="w-full grid grid-cols-2 gap-4">
      <MainChampionPopover />
      <div class="grid auto-rows-fr h-fit py-2">
        <h2 class="pl-2 dst">
          {{ ix().champNameByKey(pocket.main?.champion) || '' }}
        </h2>
        <LazyPositionSelect :pocket />
      </div>
    </div>

    <div class="size-full *:shrink-0 flex flex-col gap-8 ">
      <Textarea
        v-model:model-value="pocket.notes[0]"
        placeholder="Pocket description, tips, tricks, explanations."
        class="" />

      <PocketRoles :pocket="pocket" />

      <SidebarSelectedChampions :pocket="pocket" />

      <!--       <PocketItemsSidebarMenu :pocket="pocket" />

      <PocketSidebarRunes :pocket="pocket" /> -->

      <PocketSpellsCollapsible
        v-if="pocket"
        :pocket="pocket" />

      <!--       <PocketCardButton :pocket="pocket" @click="pocketNav = null" />
 -->
    </div>

    <PocketSidebarMenu :pocket="pocket" />
  </aside>
</template>