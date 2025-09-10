<script lang="ts" setup>
const route = useRoute()
const pocket = computed(() => ps().getPocket(String(route.params.pocketKey))).value
const pocketNav = ref()

onMounted (() => {
  pocketNav.value = route.path
})

// pocket.main = { champion: '', items: '', runes: '', role: 'All', spells: [] }
// pocket.spells = [newSpellSet()]

const hoverClass = 'hover:bg-b2/60 inset-shadow-black/2 hover:inset-shadow-xs'
</script>

<template>
  <aside class="h-full max-h-[86vh] gap-8 sticky top-0 pt-15 pb-20 px-1 flex flex-col  overflow-y-auto  scrollbar-none  relative min-w-85  max-w-85">
    <div class="w-full px-1 flex flex-col">
      <div class="flex items-center gap-4">
        <h1 class="dst ">
          {{ ix().champNameByKey(pocket.main?.champion) || '' }}
        </h1>
        <LazyPositionSelect
          :class="hoverClass"
          :side-offset="-5"
          :pocket />
      </div>
      <p class="text-3 font-medium">
        {{ ix().getChampionTitle(pocket.main?.champion) }}
      </p>
    </div>
    <div class="w-full grid grid-cols-[2fr_84px] gap-4">
      <MainChampionPopover />
      <div class="flex flex-col gap-2 h-fit py-px">
        <LazyMainRuneSelect
          :class="hoverClass"
          :pocket />

        <LazyMainSpellSelect
          :class="hoverClass"
          :pocket />
      </div>
    </div>

    <div class="size-full *:shrink-0 flex flex-col gap-8 ">
      <Textarea
        v-model:model-value="pocket.notes[0]"
        placeholder="Pocket description, tips, tricks, explanations."
        class="" />

      <PocketRoles :pocket="pocket" />

      <!--       <PocketItemsSidebarMenu :pocket="pocket" />

      <PocketSidebarRunes :pocket="pocket" /> -->

      <PocketSidebarSpells />
    </div>
  </aside>
</template>