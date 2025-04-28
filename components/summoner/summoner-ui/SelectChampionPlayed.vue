<script lang="ts" setup>
const ms = useMatchStore()
/* const playedChampions = computed(() => {
  const counts: Record<string, number> = {}

  for (const match of ms.matches) {
    counts[match.championName] = (counts[match.championName] || 0) + 1
  }

  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1]) // sort by descending frequency
    .map(([champion]) => champion)
}) */
</script>

<template>
  <Popover>
    <PopoverTrigger class="w-full h-18 px-1 rounded-box flex gap-6 items-center">
      <transition-fade group class="bg-b2  tldr-50 drop-shadow-sm relative aspect-square size-16 rounded-lg overflow-hidden grid place-items-center" :class="{ 'shadow-sm shadow-black/15 !tldr-0': ms.championSelect && ms.championSelect != 'All' }">
        <LazyChampionIconFromName v-if="ms.championSelect && ms.championSelect != 'All'" :name="ms.championSelect" class="**:size-full scale-128 **:rounded-full" hydrate-on-visible />
        <i-no-champ v-else class="size-9 opacity-50 dst absolute" />
      </transition-fade>

      <div class="font-medium grow text-left">
        <p>Matches by Champion</p>
      </div>

      <div class="h-full grid grid-cols-2 place-items-center ">
        <icon name="select" class="size-5.5" />

        <!--         <button class="btn btn-ghost btn-sm btn-square *:text-bc/30 hover:*:text-bc">
        <icon name="x-sm" class="size-5.5"/>
        </button> -->
      </div>
    </PopoverTrigger>
    <LazyCustomPopoverContent side="right" align="start" class=" p-4 w-70 h-fit">
      <CustomPopoverArrow />
      <div class="max-h-96 size-full  grid justify-items-center">
        <transition-slide appear group class=" h-fit overflow-y-scroll  justify-center pb-1 max-h-90 grid grid-cols-4 gap-2.5">
          <PopoverClose as-child>
            <label class="size-14 cursor-pointer rounded-lg overflow-hidden grid place-items-center border-nc/40 border">
              <input v-model="ms.championSelect" type="radio" class="peer hidden" value="All" />
              <i-no-champ class="size-9 opacity-50  text-nc dst" />
            </label>
          </PopoverClose>

        <!--   <PopoverClose v-for="champ in playedChampions" :key="champ" as-child>
            <label class=" hover:opacity-70 cursor-pointer size-14">
              <input v-model="ms.championSelect" type="radio" class="peer hidden" :value="champ" />
              <LazyChampionIconFromName :name="champ" class="size-14" hydrate-on-visible />

            </label>
          </PopoverClose> -->
        </transition-slide>
      </div>
    </LazyCustomPopoverContent>
  </Popover>
</template>