<script lang="ts" setup>
const ds = useDataStore()
const ans = useAnalysisStore()

const patchGames = computed(() => ans.userMatchData.filter(g => g.patch === ans.patchSelect))
const { bayesianItems } = usePatchItems(patchGames)

const data = ref({
  datasets: [
    {
      label: 'Items',
      data: [],
      pointRadius: 20,
      pointStyle: [],
    },
  ],
},
)
const itemImages = new Map<number, HTMLImageElement>()

// Preload images and store them when fully loaded
function preloadItemImage(itemId: number) {
  return new Promise((resolve) => {
    if (!itemImages.has(itemId)) {
      const img = new Image()
      img.src = `/img/item/circle/${itemId}.webp`
      img.onload = () => {
        itemImages.set(itemId, img)
        resolve(img)
      }
      img.onerror = () => {
        console.error(`Failed to load image: /img/item/${itemId}.webp`)
        resolve(null)
      }
    }
    else {
      resolve(itemImages.get(itemId))
    }
  })
}

// Watch for `itemObjects` changes and update the entire `data` object
watchEffect(async () => {
  const newDataset = {
    label: 'Items',
    data: [],
    pointRadius: 20,
    pointStyle: [],
  }
  await Promise.all(
    bayesianItems.value.map(async (item) => {
      await preloadItemImage(item.item.id)

      newDataset.data.push({
        x: item.games, // Number of games
        y: item.winrate, // Winrate
        r: Math.sqrt(item.games) * 1, // Bubble size
        label: item.item.name, // Add item name as the label
      })

      newDataset.pointStyle.push(itemImages.get(item.item.id) || new Image())
    }),
  )

  // Replace the entire `data` object to trigger reactivity
  data.value = {
    datasets: [newDataset],
  }
})
/* rounded-box shadow-warm-soft  border border-b3  tldr-50 */
</script>

<template>
  <div class="px-4 pb-4 pt-8 bg-b1 relative flex flex-col size-full   ">
    <div class="grow pt-2 px-8 flex w-full">
      <div class="">
        <h4 class="dst">
          Item Winrates & Usage
        </h4>
        <p class="mt-2">
          <SummonerName class="capitalize " />
        </p>
      </div>
      <div class="font-medium grow justify-end text-end">
        {{ ans.patchSelect || ds.currentPatch }}
      </div>
    </div>
    <div class="justify-self-end w-full h-full pt-4  -ml-6">
      <BubbleChart :data="data" />
    </div>

    <transition-slide class="pointer-events-none">
      <div v-if="!ans.patchGames.length" class="absolute top-0 left-0 size-full bg-black/40 rounded-box grid place-items-center">
        <div class="badge badge-xl text-2 shadow-lg opacity-90">
          No data this patch.
        </div>
      </div>
    </transition-slide>
  </div>
</template>