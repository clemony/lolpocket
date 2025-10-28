<script lang="ts" setup>
// @todo fix usermatchdata

const state = inject<SummonerData>(SummonerKey)

const { bayesianItems } = useMatchItems(state.summoner.puuid, state.matches)

const data = ref({
  datasets: [
    {
      data: [],
      label: 'Items',
      pointRadius: 20,
      pointStyle: [],
    },
  ],
})
const itemImages = new Map<number, HTMLImageElement>()

// Preload images and store them when fully loaded
function preloadItemImage(itemId: number) {
  return new Promise((resolve) => {
    if (!itemImages.has(itemId)) {
      const img = new Image()
      img.src = `/img/items/circle/${itemId}.webp`
      img.onload = () => {
        itemImages.set(itemId, img)
        resolve(img)
      }
      img.onerror = () => {
        console.error(`Failed to load image: /img/items/${itemId}.webp`)
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
    data: [],
    label: 'Items',
    pointRadius: 20,
    pointStyle: [],
  }
  await Promise.all(
    bayesianItems.value.map(async (item) => {
      await preloadItemImage(item.item.id)

      newDataset.data.push({
        label: item.item.name, // Add item name as the label
        r: Math.sqrt(item.games) * 1, // Bubble size
        x: item.games, // Number of games
        y: item.winrate, // Winrate
      })

      newDataset.pointStyle.push(itemImages.get(item.item.id) || new Image())
    })
  )

  // Replace the entire `data` object to trigger reactivity
  data.value = {
    datasets: [newDataset],
  }
})
</script>

<template>
  <div class="size-full overflow-hidden pb-9">
    <div class="bg-b1 border-shadow inset-shadow-xxs size-full max-h-160">
      <div
        class="bg-b1 rounded-box relative flex size-full flex-col overflow-hidden px-4 pt-4 pb-5">
        <div class="-ml-6 h-full w-full justify-self-end pt-4">
          <BubbleChart :data="data" />
        </div>

        <transition-slide class="pointer-events-none">
          <!--  <div
            v-if="!ms.patchGames.length"
            class="absolute top-0 left-0 size-full bg-black/40 rounded-box grid place-items-center">
            <div class="badge badge-xl text-2 shadow-lg opacity-90">
              No data this patch.
            </div>
          </div> -->
        </transition-slide>
      </div>
    </div>
  </div>
</template>
