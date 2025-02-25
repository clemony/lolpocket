<script lang="ts" setup>
import { navigationMenuTriggerStyle } from 'components/base/navigation-menu/nin'

const config = useRuntimeConfig()

const ts = useTempStore()
const as = useAccountStore()

const summoner = computed(() => {
  return as.userAccount ? as.userAccount : defaultUser
})

/* onMounted (async() => {
const { data, isFinished } =  useAxios(`https://ddragon.leagueoflegends.com/cdn/15.2.1/img/profileicon/${summoner.value.profileIconId}.png`)
await data
summonerIcon.value = data
})

system-uicons:browser-alt

 */

const cardKey = ref(0)

watchEffect(() => {
  if (!as.userAccount.session) {
    cardKey.value++
  }
})
</script>

<template>
  <div class="size-full">
    <SummonerName class="text-9 font-black pl-9 pr-3 font-serif dst" />

    <SimpleNav :model-value="summonerLinks" />

    <!--  <SummonerSidebarFooter /> -->
  </div>
</template>

<style scoped>

</style>
