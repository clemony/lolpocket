<script lang="ts" setup>
const { data: ogData, error } = await useFetch<PatchNotesData>(
  '/api/fetch-og',
  {
    method: 'GET',
    params: {
      url: 'https://www.leagueoflegends.com/en-us/news/game-updates/patch-25-07-notes/',
    },
  },
)

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img(ogData.value.image, { width: 100 })

  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <div
    class="
      relative flex h-60 w-100 flex-col justify-end overflow-hidden rounded-box
      bg-cover bg-center px-4 py-4 shadow-sm inset-shadow-sm
      inset-shadow-black/50 drop-shadow-sm
      before:absolute before:top-0 before:left-0 before:z-1 before:size-full
      before:-bg-linear-155 before:from-transparent before:from-20%
      before:to-black/100
    "
    :style="backgroundStyles">
    <div class="z-2 w-full text-white text-shadow-md">
      <h3 class="font-serif text-9 font-black">
        {{ ogData.title }}
      </h3>

      <p class="mt-3 px-0.75 text-4 tracking-tight text-shadow-md">
        {{ ogData.description }}
      </p>
    </div>
  </div>
</template>
