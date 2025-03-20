<script lang="ts" setup>
const props = defineProps<{
  patchGames: any
}>()

const as = useAccountStore()
const ds = useDataStore()
const ans = useAnalysisStore()

const getPatchItems = computed(() => {
  const itemStats = new Map<number, { games: number, wins: number, losses: number, winrate: number }>()

  const patchGames = ref(props.patchGames)
  patchGames.value.forEach(({ items, win }) => {
    items.forEach((item) => {
      if (!itemStats.has(item)) {
        itemStats.set(item, { games: 0, wins: 0, losses: 0, winrate: 0 })
      }

      const stats = itemStats.get(item)!
      stats.games++
      win ? stats.wins++ : stats.losses++
      stats.winrate = (stats.wins / stats.games) * 100
    })
  })

  return [...itemStats.entries()]
    .sort((a, b) => b[1].games - a[1].games) // Sort by most played
    .map(([item, stats]) => ({
      item: ds.items.find(i => i.id === item)?.name || null, // Get item name from ID
      games: stats.games,
      wins: stats.wins,
      losses: stats.losses,
      winrate: stats.winrate,
    }))
})
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
    getPatchItems.value.map(async (item) => {
      const itemId = ds.items.find(i => i.name === item.item)?.id
      if (!itemId)
        return

      await preloadItemImage(itemId)

      newDataset.data.push({
        x: item.games, // Number of games
        y: item.winrate, // Winrate
        r: Math.sqrt(item.games) * 1.1, // Bubble size
        label: item.item, // ✅ Add item name as the label
      })

      newDataset.pointStyle.push(itemImages.get(itemId) || new Image())
    }),
  )

  // Replace the entire `data` object to trigger reactivity
  data.value = {
    datasets: [newDataset],
  }
})
</script>

<template>
  <div class="px-4 pb-4 pt-8 bg-b1 rounded-box shadow-warm-soft shadow-black/6 border border-b3/70 relative flex flex-col h-full  grayscale hover:grayscale-0 tldr-50">
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
      <div v-if="!props.patchGames.length" class="absolute top-0 left-0 size-full bg-black/40 rounded-box grid place-items-center">
        <div class="badge badge-xl text-2 shadow-lg opacity-90">
          No data this patch.
        </div>
      </div>
    </transition-slide>
  </div>
</template>