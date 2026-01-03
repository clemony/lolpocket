<script lang="ts" setup>
const { api } = defineProps<{
  api: SummonerInject

}>()
definePageMeta({
  middleware: (to, from) => {
    if (!to.params.champion_key)
      return abortNavigation()
  },
  keepAlive: { max: 1 }
})

const championId = computed (() => champIdByKey(ui().openChampionTab))

const { mastery: m } = api

const mt: PlayerChampionMastery[] = await m()
const mastery = computed (() => {
  if (!championId.value || !mt)
    return null
  return mt?.find(c => c?.championId === championId?.value)
})

const data = usePlayerStatsProvider(api, championId)
</script>

<template>
  <div
    :class="
      cn('relative z-auto mx-auto grid h-fit min-h-screen w-full max-w-[1280px] grid-cols-[260px_1fr] gap-x-1 pb-44',
      )
    ">
    <SummonerChampionAside
      v-if="data"
      :api
      :mastery
      :data />
    <SummonerChampionMain
      v-if="data"
      :mastery />
  </div>
</template>