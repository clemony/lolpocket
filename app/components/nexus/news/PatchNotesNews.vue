<script lang="ts" setup>
const ds = useDataStore()

const { data: ogData, error } = await useFetch<PatchNotesData>('/api/fetch-og', {
  method: 'GET',
  params: {
    url: 'https://www.leagueoflegends.com/en-us/news/game-updates/patch-25-07-notes/',
  },
})

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img(ogData.value.image, { width: 100 })

  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <div class="w-100 h-60 bg-cover rounded-box bg-center flex overflow-hidden  flex-col  relative py-4 px-4 drop-shadow-sm inset-shadow-sm  inset-shadow-black/50   justify-end   before:to-black/100 before:from-20% before:z-1 before:from-transparent before:absolute before:-bg-linear-155 shadow-sm    before:size-full before:top-0 before:left-0" :style="backgroundStyles">
    <div class="w-full  z-2 text-shadow-md  text-white ">
      <h3 class="font-serif font-black text-9">
        {{ ogData.title }}
      </h3>

      <p class="text-4 text-shadow-md mt-3 px-0.75 tracking-tight">
        {{ ogData.description }}
      </p>
    </div>
  </div>
</template>