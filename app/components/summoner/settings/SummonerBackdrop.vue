<script lang="ts" setup>
import { motion } from 'motion-v'

const { summoner, open, matches } = defineProps<{
  summoner: Summoner | null
  open?: boolean

  matches: MatchData[]
}>()

const state = inject<PlayerData>(SummonerKey)
watch(() => as().publicData.splash, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <Img
    v-if="summoner"
    layout-id="backdrop-image"
    :img="(as().publicData?.splash ?? state.topChampion?.splash).replace('centered', 'uncentered')"
    alt="profile-image"
    class="  " />
</template>
