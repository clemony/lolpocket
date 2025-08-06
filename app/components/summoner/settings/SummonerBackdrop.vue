<script lang="ts" setup>
import { motion } from 'motion-v'

const { summoner, open } = defineProps<{
  summoner: Summoner | null
  open?: boolean
}>()

const as = useAccountStore()

const { topChampion } = useSummonerChampions(
  summoner.matches?.simplified || [],
  {
    mode: 'top',
    limit: 1,
  },
)

// as.fetchPublicData(as.userAccount.riot.puuid)
watch(() => as.publicData.splash, (newVal) => {
  console.log('💠 - watch - newVal:', newVal)
})
</script>

<template>
  <Img
    v-if="summoner"
    layout-id="backdrop-image"
    :img="(as.publicData?.splash ?? topChampion?.splash).replace('centered', 'uncentered')"
    alt="profile-image"
    class="  " />
</template>
