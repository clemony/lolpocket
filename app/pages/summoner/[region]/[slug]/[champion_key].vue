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
    ref="scrollRef"
    :class="
      cn('z-auto grid h-max min-h-screen w-screen grid-cols-[1fr_3fr] gap-28 justify-self-center px-24',
      )
    ">
    <SummonerChampionAside
      v-if="data"
      :mastery
      :data />
    <SummonerChampionMain
      v-if="data" />
  </div>
</template>