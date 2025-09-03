<script lang="ts" setup>
import { newSpellSet } from '#shared/utils'

const route = useRoute('pocket-pocketKey-champions')
const pocket = computed(() => ps().getPocket(route.params.pocketKey)).value
const pocketNav = ref()

onMounted (() => {
  pocketNav.value = route.path
})

// pocket.main = { champion: '', items: '', runes: '', role: 'All', spells: [] }
// pocket.spells = [newSpellSet()]
</script>

<template>
  <aside class="h-full max-h-[86vh] gap-8 sticky top-0 pt-15 pb-20 px-1 flex flex-col  overflow-y-auto  scrollbar-none  relative min-w-105  max-w-105">
    <div class="w-full px-1 flex flex-col">
      <div class="flex items-center justify-between">
        <h1 class="dst">
          {{ ix().champNameByKey(pocket.main?.champion) || '' }}
        </h1>
      </div>
      <p class="">
        {{ ix().getChampionTitle(pocket.main?.champion) }}
      </p>
    </div>
    <div class="w-full grid grid-cols-2 gap-4">
      <MainChampionPopover />
      <div class="grid auto-rows-fr h-fit py-2">
        <LazyPositionSelect
          :side-offset="-7"
          :pocket />
        <LazyMainSpellSelect :pocket />
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

      <PocketSidebarSpells />
    </div>
  </aside>
</template>