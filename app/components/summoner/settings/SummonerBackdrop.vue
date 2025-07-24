<script lang="ts" setup>
import { motion } from 'motion-v'

const { summoner } = defineProps<{
  summoner: Summoner | null
}>()

const emit = defineEmits<{
  (e: 'set:top-champion', topChampion: TopChampion): void
}>()
const ix = useIndexStore()
const as = useAccountStore()

const { championStats: topChampion } = useChampions(
  summoner.matches?.simplified,
  {
    mode: 'lite',
    limit: 1,
  },
)

const topChampionData = computed<TopChampion>(() => {
  if (!summoner || !summoner?.matches || !topChampion.value)
    return

  const champ = Object.keys(topChampion.value)[0]
  const championData = {
    name: ix.champNameByKey(champ),
    splash: getSkinSplash(champ, getRandom(ix.skins[champ]), 'uncentered'),
  }
  if (champ)
    emit('set:top-champion', championData ?? null)

  return championData ?? null
})

console.log('💠 - topChampionData:', topChampionData.value)
</script>

<template>
  <motion.div
    layout
    class="z-0 h-[290px] w-screen absolute overflow-hidden top-0 left-0 translate-x-[10%]">
    <Img
      v-if="summoner"
      layout-id="backdrop-image"
      :img="summoner.profileSplash ?? topChampionData.splash"
      alt="profile-image"
      class="object-cover object-[50%_7%] mask-linear-[to_right,transparent_36%,black_60%]" />
  </motion.div>
</template>
